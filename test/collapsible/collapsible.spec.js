const describe = require('mocha').describe;
const before = require('mocha').before;
const after = require('mocha').after;
const beforeEach = require('mocha').beforeEach;
const it = require('mocha').it;
const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon = require('sinon');

import {removeChildElements} from '../../src/utils/dom-utils';
import requireUncached from 'require-uncached';
import jsdomify from 'jsdomify';
import {patchJsDom} from '../testutils/patch-jsdom';
import {shouldBehaveLikeAMdlComponent} from '../testutils/shared-component-behaviours';

const JS_COLLAPSIBLE = 'mdlext-js-collapsible';
const COLLAPSIBLE_COMPONENT = 'MaterialExtCollapsible';
const COLLAPSIBLE_CONTROL_CLASS = 'mdlext-collapsible-control';
const COLLAPSIBLE_REGION_CLASS = 'mdlext-collapsible-region';

const component_fixture = `
<div class="${JS_COLLAPSIBLE}">
  <button class=${COLLAPSIBLE_CONTROL_CLASS}>Click to expand</button>
</div>
<div class=${COLLAPSIBLE_REGION_CLASS}><p>A collapsible region</p></div>`;

const component_fixture_aria_expanded_false = `
<div class="${JS_COLLAPSIBLE}">
  <button class=${COLLAPSIBLE_CONTROL_CLASS} aria-expanded="false" aria-controls="region-1">Click to expand</button>
</div>
<div id="region-1" class=${COLLAPSIBLE_REGION_CLASS} role="region" hidden><p>A collapsible region #1</p></div>`;

const component_fixture_aria_expanded_true = `
<div class="${JS_COLLAPSIBLE}">
  <button class=${COLLAPSIBLE_CONTROL_CLASS} aria-expanded="true" aria-controls="region-2">Click to expand</button>
</div>
<div id="region-2" class=${COLLAPSIBLE_REGION_CLASS} role="region"><p>A collapsible region #2</p></div>`;

const component_fixture_without_region = `
<span>
  <div class="${JS_COLLAPSIBLE}">
    <button class=${COLLAPSIBLE_CONTROL_CLASS}>Click to expand</button>
  </div>
</span>`;

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
    ${component_fixture}
  </div>
  <div id="mount">
  </div>
</main>
</body>
</html>`;


describe('MaterialExtCollapsible', () => {

  before ( () => {
    patchJsDom(fixture);

    // Must load MDL after jsdom, see: https://github.com/mochajs/mocha/issues/1722
    requireUncached( 'material-design-lite/material');
    global.componentHandler = window.componentHandler;
    assert.isObject(componentHandler, 'Expected global MDL component handler');

    requireUncached('../../src/collapsible/collapsible');
    assert.isNotNull(window.MaterialExtCollapsible, 'Expected MaterialExtCollapsible not to be null');

    global.MaterialExtCollapsible = window.MaterialExtCollapsible;
  });

  after ( () => {
    jsdomify.destroy();
  });

  describe('General behaviour', () => {

    shouldBehaveLikeAMdlComponent({
      componentName: COLLAPSIBLE_COMPONENT,
      componentCssClass: JS_COLLAPSIBLE,
      newComponenrMountNodeSelector: '#mount',
      newComponentHtml: component_fixture
    });

    it('should have public methods available via widget', () => {
      const el = createDefaultValidComponent();
      componentHandler.upgradeElement(el, 'MaterialExtCollapsible');
      const methods = [
        'getControlElement',
        'addRegionElements',
      ];
      methods.forEach( fn => {
        expect(el.MaterialExtCollapsible[fn]).to.be.a('function');
      });

    });

    it('should throw error if control element is missing', () => {
      const collapsible = document.createElement('div');
      collapsible.className = JS_COLLAPSIBLE;
      expect(() => {
        componentHandler.upgradeElement(collapsible, COLLAPSIBLE_COMPONENT);
      }).to.throw(Error);
    });

    it('should have default "aria-expanded=false" if not set', () => {
      const collapsible = createDefaultValidComponent();
      let control = collapsible.nextElementSibling;
      expect(control.hasAttribute('aria-expanded')).to.be.false;

      componentHandler.upgradeElement(collapsible, COLLAPSIBLE_COMPONENT);

      control = collapsible.MaterialExtCollapsible.getControlElement();
      expect(control.hasAttribute('aria-expanded')).to.be.true;
      expect(control.getAttribute('aria-expanded')).to.equal('false');
    });

    it('should not have role="button" if control is a button', () => {
      const collapsible = createDefaultValidComponent();
      componentHandler.upgradeElement(collapsible, COLLAPSIBLE_COMPONENT);

      const control = collapsible.MaterialExtCollapsible.getControlElement();
      expect(control.nodeName.toLowerCase()).to.equal('button');
      expect(control.hasAttribute('role')).to.be.false;
    });

    it('should have role="button" if control is not a button', () => {
      const collapsible = createDefaultValidComponent('div');
      componentHandler.upgradeElement(collapsible, COLLAPSIBLE_COMPONENT);

      const control = collapsible.MaterialExtCollapsible.getControlElement();
      expect(control.hasAttribute('role')).to.be.true;
    });

    it('should accept a collapsible component without a collapsible region', () => {
      const container = document.querySelector('#mount');
      try {
        expect(() => {
          container.insertAdjacentHTML('beforeend', component_fixture_without_region);
          const component = container.querySelector(`.${JS_COLLAPSIBLE}`);
          componentHandler.upgradeElement(component, COLLAPSIBLE_COMPONENT);
        }).to.not.throw(Error);

      }
      finally {
        removeChildElements(container);
      }
    });

    it('should set class="mdlext-collapsible-region" if not present', () => {
    });


  });


});

function createDefaultValidComponent(controlNodeName = 'button') {

  const control = document.createElement(controlNodeName);
  control.className = COLLAPSIBLE_CONTROL_CLASS;

  const collapsible = document.createElement('div');
  collapsible.className = JS_COLLAPSIBLE;
  collapsible.appendChild(control);

  const region = document.createElement('div');
  region.className = COLLAPSIBLE_REGION_CLASS;

  const span = document.createElement('span');
  span.appendChild(collapsible);
  span.appendChild(region);

  return collapsible;
}
