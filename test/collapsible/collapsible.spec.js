/* eslint-env mocha */
import { before, beforeEach, after, afterEach, describe, it } from 'mocha';
import { expect, assert } from 'chai';
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
  <button class="${COLLAPSIBLE_CONTROL_CLASS}">Click to expand</button>
</div>
<div class="${COLLAPSIBLE_REGION_CLASS}"><p>A collapsible region</p></div>`;

const component_fixture_aria_expanded_false = `
<div class="${JS_COLLAPSIBLE}">
  <button class="${COLLAPSIBLE_CONTROL_CLASS}" aria-expanded="false" aria-controls="region-1">Click to expand</button>
</div>
<div id="region-1" class=${COLLAPSIBLE_REGION_CLASS} role="region" hidden><p>A collapsible region #1</p></div>`;

const component_fixture_aria_expanded_true = `
<div class="${JS_COLLAPSIBLE}">
  <button class="${COLLAPSIBLE_CONTROL_CLASS}" aria-expanded="true" aria-controls="region-2">Click to expand</button>
</div>
<div id="region-2" class="${COLLAPSIBLE_REGION_CLASS}" role="region"><p>A collapsible region #2</p></div>`;

const component_fixture_without_region = `
<span>
  <div class="${JS_COLLAPSIBLE}">
    <button class="${COLLAPSIBLE_CONTROL_CLASS}">Click to expand</button>
  </div>
</span>`;

const component_fixture_one_to_many_aria_controls = `
<div class="${JS_COLLAPSIBLE}">
  <button class="${COLLAPSIBLE_CONTROL_CLASS}" aria-expanded="true" aria-controls="region-1 region-2">Click to expand</button>
</div>
<div id="region-1" class="${COLLAPSIBLE_REGION_CLASS}"><p>A collapsible region</p></div>
<div id="region-2" class="${COLLAPSIBLE_REGION_CLASS}"><p>A collapsible region</p></div>`;

const component_fixture_one_to_many_siblings = `
<div class="${JS_COLLAPSIBLE}">
  <button class=${COLLAPSIBLE_CONTROL_CLASS}>Click to expand</button>
</div>
<div class="${COLLAPSIBLE_REGION_CLASS}"><p>A collapsible region</p></div>
<div class="${COLLAPSIBLE_REGION_CLASS}"><p>A collapsible region</p></div>`;

const component_fixture_collapsibles_with_one_to_many_siblings = `
<div class="${JS_COLLAPSIBLE}">
  <button class=${COLLAPSIBLE_CONTROL_CLASS} aria-expanded="true">Collapsible 1</button>
</div>
<div class="${COLLAPSIBLE_REGION_CLASS}"><p>A collapsible region #1.1</p></div>
<p>A Paragraph</p>
<div class="${COLLAPSIBLE_REGION_CLASS}"><p>A collapsible region #1.2</p></div>

<div class="${JS_COLLAPSIBLE}">
  <button class=${COLLAPSIBLE_CONTROL_CLASS} aria-expanded="false">Collapsible 2</button>
</div>
<div class="${COLLAPSIBLE_REGION_CLASS}"><p>A collapsible region #2.1</p></div>
<div class="${COLLAPSIBLE_REGION_CLASS}"><p>A collapsible region #2.2</p></div>
<div class="${COLLAPSIBLE_REGION_CLASS}"><p>A collapsible region #2.3</p></div>`;

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
    expect(componentHandler, 'Expected global MDL component handler').to.be.an.object;

    requireUncached('../../src/collapsible/collapsible');
    expect(window.MaterialExtCollapsible, 'Expected MaterialExtCollapsible not to be null').to.not.null;
    global.MaterialExtCollapsible = window.MaterialExtCollapsible;
  });

  after ( () => {
    jsdomify.destroy();
  });

  describe('General behaviour', () => {

    afterEach( () => {
      const mount = document.querySelector('#mount');
      removeChildElements(mount);
    });

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
        'getRegionElements',
        'addRegionElements',
        'removeRegionElements',
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

    it('should have default attributes and roles', () => {
      const collapsible = createDefaultValidComponent('div');
      let control = collapsible.nextElementSibling;
      expect(control.hasAttribute('aria-expanded')).to.be.false;
      expect(control.hasAttribute('aria-controls')).to.be.false;
      expect(control.hasAttribute('role')).to.be.false;

      componentHandler.upgradeElement(collapsible, COLLAPSIBLE_COMPONENT);

      control = collapsible.MaterialExtCollapsible.getControlElement();
      expect(control.hasAttribute('aria-expanded')).to.be.true;
      expect(control.getAttribute('aria-expanded')).to.equal('false');
      expect(control.hasAttribute('aria-controls')).to.be.true;
      expect(control.hasAttribute('role')).to.be.true;
      expect(control.getAttribute('role')).to.equal('button');

      const regions = collapsible.MaterialExtCollapsible.getRegionElements();
      expect(regions, 'Expected at least one region').to.have.length.above(0);

      regions.forEach( r => {
        expect(r.hasAttribute('id')).to.true;
        expect(r.hasAttribute('role')).to.true;
        expect(r.getAttribute('role')).to.equal('region');
        expect(r.hasAttribute('hidden')).to.true;
      });
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
      expect(() => {
        container.insertAdjacentHTML('beforeend', component_fixture_without_region);
        const component = container.querySelector(`.${JS_COLLAPSIBLE}`);
        const region = component.querySelector(`.${COLLAPSIBLE_REGION_CLASS}`);
        expect(region).to.be.null;
        componentHandler.upgradeElement(component, COLLAPSIBLE_COMPONENT);
      }).to.not.throw(Error);
    });

    it('should have two collapsible regions given by aria-controls', () => {
      const container = document.querySelector('#mount');
      container.insertAdjacentHTML('beforeend', component_fixture_one_to_many_aria_controls);
      const component = container.querySelector(`.${JS_COLLAPSIBLE}`);
      componentHandler.upgradeElement(component, COLLAPSIBLE_COMPONENT);
      expect(component.MaterialExtCollapsible.getRegionElements()).to.have.length.of(2);
    });

    it('should have two collapsible regions given by siblings', () => {
      const container = document.querySelector('#mount');
      container.insertAdjacentHTML('beforeend', component_fixture_one_to_many_siblings);
      const component = container.querySelector(`.${JS_COLLAPSIBLE}`);
      componentHandler.upgradeElement(component, COLLAPSIBLE_COMPONENT);
      expect(component.MaterialExtCollapsible.getRegionElements()).to.have.length.of(2);
    });

    it('should have two collapsibles with many collapsible regions given by siblings', () => {
      const container = document.querySelector('#mount');
      container.insertAdjacentHTML('beforeend', component_fixture_collapsibles_with_one_to_many_siblings);
      const components = container.querySelectorAll(`.${JS_COLLAPSIBLE}`);
      componentHandler.upgradeElements(components, COLLAPSIBLE_COMPONENT);
      [...components].forEach(c => {
        expect(c.MaterialExtCollapsible.getRegionElements()).to.have.length.above(1);
      });
    });

    it('should not alter roles and attributes if already given in markup', () => {
      const container = document.querySelector('#mount');
      container.insertAdjacentHTML('beforeend', component_fixture_aria_expanded_false);
      let component = container.querySelector(`.${JS_COLLAPSIBLE}`);
      let control = component.querySelector(`.${COLLAPSIBLE_CONTROL_CLASS}`);
      let region = container.querySelector(`.${COLLAPSIBLE_REGION_CLASS}`);

      const aria_expanded = control.getAttribute('aria-expanded');
      const aria_controls = control.getAttribute('aria-controls');
      const region_role = region.getAttribute('role');
      const region_isHidden = region.hasAttribute('hidden');

      componentHandler.upgradeElement(component, COLLAPSIBLE_COMPONENT);

      // Re-query is strictly not needed, but to emphasize ....
      component = container.querySelector(`.${JS_COLLAPSIBLE}`);
      control = component.querySelector(`.${COLLAPSIBLE_CONTROL_CLASS}`);
      region = container.querySelector(`.${COLLAPSIBLE_REGION_CLASS}`);

      expect(aria_expanded).to.equal(control.getAttribute('aria-expanded'));
      expect(aria_controls).to.equal(control.getAttribute('aria-controls'));
      expect(region_role).to.equal(region.getAttribute('role'));
      expect(region_isHidden).to.equal(region.hasAttribute('hidden'));
    });

    it('should have "tabindex=0" if the control element is not a focusable element', () => {
      const container = document.querySelector('#mount');
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

  const mount = document.getElementById('mount');
  mount.appendChild(span);

  return collapsible;
}
