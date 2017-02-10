/* eslint-env mocha */
import { before, beforeEach, after, afterEach, describe, it } from 'mocha';
import { expect, assert } from 'chai';
import requireUncached from 'require-uncached';
import jsdomify from 'jsdomify';
import {patchJsDom} from '../testutils/patch-jsdom';
import {removeChildElements} from '../../src/utils/dom-utils';
import {shouldBehaveLikeAMdlComponent} from '../testutils/shared-component-behaviours';

const JS_FORMAT_FIELD = 'mdlext-js-formatfield';
const FORMAT_FIELD_COMPONENT = 'MaterialExtFormatfield';

const fixture_textfield = `
<div class="mdl-textfield mdl-js-textfield mdlext-js-formatfield">
  <input class="mdl-textfield__input" type="text" pattern="[0-9]*" id="phone">
  <label class="mdl-textfield__label" for="phone">Phone</label>
  <span class="mdl-textfield__error">Digits only</span>
</div>`;

const fixture = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Collapsible Fixture</title>
</head>
<body>
<main>
  <div id="default-fixture">
    ${fixture_textfield}
  </div>
  <div id="mount">
  </div>
</main>
</body>
</html>`;


describe('MaterialExtFormatfield', () => {

  let mount;

  before ( () => {
    patchJsDom(fixture);

    // Must load MDL after jsdom, see: https://github.com/mochajs/mocha/issues/1722
    requireUncached( 'material-design-lite/material');
    global.componentHandler = window.componentHandler;
    expect(componentHandler, 'Expected global MDL component handler').to.be.an.object;

    requireUncached('../../src/formatfield/formatfield');
    expect(window.MaterialExtFormatfield, 'Expected MaterialExtFormatfield not to be null').to.not.null;
    global.MaterialExtFormatfield = window.MaterialExtFormatfield;
  });

  after ( () => {
    jsdomify.destroy();
  });

  beforeEach( () => {
    mount = document.querySelector('#mount');
  });

  afterEach( () => {
    const mdl = mount.querySelectorAll('.is-upgraded');
    componentHandler.downgradeElements(mdl);
    removeChildElements(mount);
  });

  describe('General behaviour', () => {
    shouldBehaveLikeAMdlComponent({
      componentName: FORMAT_FIELD_COMPONENT,
      componentCssClass: JS_FORMAT_FIELD,
      newComponenrMountNodeSelector: '#mount',
      newComponentHtml: fixture_textfield
    });

    it('should have public methods available via widget', () => {
      const el = createSingleLineTextfield();
      mount.appendChild(el);
      componentHandler.upgradeElement(el);
      const methods = [
        'getOptions',
        'getUnformattedValue',
      ];
      methods.forEach( fn => {
        expect(el.MaterialExtFormatfield[fn]).to.be.a('function');
      });
    });
  });

  describe('Options', () => {
    it('should have default options', () => {
      const el = createSingleLineTextfield();
      mount.appendChild(el);
      componentHandler.upgradeElement(el);
      const options = el.MaterialExtFormatfield.getOptions();
      expect(options, 'Expected default options').to.be.defined;
      expect(options.locales, 'Expected default options.locales').to.be.defined;
      expect(options.groupSeparator, 'Expected default options.groupSeparator').to.be.defined;
      expect(options.decimalSeparator, 'Expected default options.decimalSeparator').to.be.defined;
    });

    it('should set options via data attribute', () => {
      const el = createSingleLineTextfield('{"locales": "nb-NO", "groupSeparator": ";", "decimalSeparator": "," }');
      mount.appendChild(el);
      expect(() => {
        componentHandler.upgradeElement(el);
      }).to.not.throw(Error);

      const options = el.MaterialExtFormatfield.getOptions();
      expect(options.locales).to.equal('nb-NO');
      expect(options.groupSeparator).to.equal(';');
      expect(options.decimalSeparator).to.equal(',');
    });

    it('should throw an error if data attribute is malformed', () => {
      const el = createSingleLineTextfield('{"locales": ILLEGAL, "groupSeparator": VALUE, "decimalSeparator": "," }');
      mount.appendChild(el);
      expect(() => {
        componentHandler.upgradeElement(el);
      }).to.throw(Error);
    });

    it('should throw an error if options.groupSeparator === options.decimalSeparator', () => {
      const el = createSingleLineTextfield('{"groupSeparator": ".", "decimalSeparator": "." }');
      mount.appendChild(el);
      expect(() => {
        componentHandler.upgradeElement(el);
      }).to.throw(Error);
    });
  });

  describe('Format', () => {
    it('should format input value when initialized', () => {
      const el = createSingleLineTextfield('{"locales": "nb-NO", "groupSeparator": " ", "decimalSeparator": "," }');
      mount.appendChild(el);
      const input = el.querySelector('#testInput');
      input.value = '1234.5';
      componentHandler.upgradeElement(el);
      expect(input.value).to.equal('1 234,5');
    });

    it('should not format input value if NaN', () => {
      const el = createSingleLineTextfield('{"locales": "nb-NO", "groupSeparator": " ", "decimalSeparator": "," }');
      mount.appendChild(el);
      const input = el.querySelector('#testInput');
      input.value = 'ABC1234.5';
      componentHandler.upgradeElement(el);
      expect(input.value).to.equal('ABC1234.5');
    });

    it('should return the unformatted value', () => {
      const el = createSingleLineTextfield('{"locales": "nb-NO", "groupSeparator": " ", "decimalSeparator": "," }');
      mount.appendChild(el);
      const input = el.querySelector('#testInput');
      input.value = '1234.5';
      componentHandler.upgradeElement(el);
      expect(input.value).to.equal('1 234,5');
      expect(el.MaterialExtFormatfield.getUnformattedValue()).to.equal('1234.5');
    });
  });

  describe('Events', () => {
    it('should strip group separator from value on focus, then format value on blur', () => {
      const el = createSingleLineTextfield('{"locales": "nb-NO", "groupSeparator": ",", "decimalSeparator": "." }');
      mount.appendChild(el);
      const input = el.querySelector('#testInput');
      input.value = '1234567.8';
      componentHandler.upgradeElement(el);

      dispatchEvent(input, 'focus');
      expect(input.value).to.equal('1234567.8');

      dispatchEvent(input, 'blur');
      expect(input.value).to.equal('1,234,567.8');
    });

    it('should not alter value if input is readonly', () => {
      const el = createSingleLineTextfield('{"locales": "nb-NO", "groupSeparator": " ", "decimalSeparator": "," }');
      mount.appendChild(el);
      const input = el.querySelector('#testInput');
      input.setAttribute('readonly', '');
      input.value = '1234.5';
      componentHandler.upgradeElement(el);

      dispatchEvent(input, 'focus');
      expect(input.value).to.equal('1 234,5');

      dispatchEvent(input, 'blur');
      expect(input.value).to.equal('1 234,5');
    });

    it('should not alter value if input is disabled', () => {
      const el = createSingleLineTextfield('{"locales": "nb-NO", "groupSeparator": ",", "decimalSeparator": "." }');
      mount.appendChild(el);
      const input = el.querySelector('#testInput');
      input.setAttribute('disabled', '');
      input.value = '1234.5';
      componentHandler.upgradeElement(el);

      dispatchEvent(input, 'focus');
      expect(input.value).to.equal('1,234.5');

      dispatchEvent(input, 'blur');
      expect(input.value).to.equal('1,234.5');
    });

  });

  function dispatchEvent(target, eventName) {
    target.dispatchEvent(new Event(eventName, {
      bubbles: true,
      cancelable: true,
      view: window
    }))
  }

  function createSingleLineTextfield(opts) {
    const container = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const errorMessage = document.createElement('span');
    container.className = 'mdl-textfield mdl-js-textfield mdlext-js-formatfield';
    input.className = 'mdl-textfield__input';
    input.pattern = '[0-9]';
    input.id = 'testInput';
    label.for = input.id;
    label.className = 'mdl-textfield__label';
    label.text = 'Number';
    errorMessage.className = 'mdl-textfield__error';
    errorMessage.text = 'Positive number only.';
    container.appendChild(input);
    container.appendChild(label);
    container.appendChild(errorMessage);
    if(opts) {
      container.setAttribute('data-formatfield-options', opts)
    }
    return container;
  }

});
