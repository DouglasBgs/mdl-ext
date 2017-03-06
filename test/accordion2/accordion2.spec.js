import { before, after, afterEach, describe, it } from 'mocha';
import { expect } from 'chai';
import requireUncached from 'require-uncached';
import jsdomify from 'jsdomify';
import { removeChildElements } from '../../src/utils/dom-utils';
import { patchJsDom } from '../testutils/patch-jsdom';
import { shouldBehaveLikeAMdlComponent } from '../testutils/shared-component-behaviours';

const JS_ACCORDION = 'mdlext-js-accordion2';
const ACCORDION_COMPONENT = 'MaterialExtAccordion2';

const fixture_simple = `
<div class="${JS_ACCORDION}">
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
    ${fixture_simple}
  </div>
  <div id="mount">
  </div>
</main>
</body>
</html>`;


describe('MaterialExtAccordion2', () => {

  before (() => {
    patchJsDom(fixture);

    // Must load MDL after jsdom, see: https://github.com/mochajs/mocha/issues/1722
    requireUncached( 'material-design-lite/material');
    global.componentHandler = window.componentHandler;
    expect(componentHandler, 'Expected global MDL component handler').to.be.an.object;

    requireUncached('../../src/accordion2/accordion2');
    expect(window.MaterialExtAccordion2, 'Expected MaterialExtAccordion2 not to be null').to.not.null;
    global.MaterialExtAccordion2 = window.MaterialExtAccordion2;
  });

  after (() => {
    jsdomify.destroy();
  });

  afterEach(() => {
    const mount = document.querySelector('#mount');
    const mdl = mount.querySelectorAll('.is-upgraded');
    componentHandler.downgradeElements(mdl);
    removeChildElements(mount);
  });

  describe('General behaviour', () => {

    shouldBehaveLikeAMdlComponent({
      componentName: ACCORDION_COMPONENT,
      componentCssClass: JS_ACCORDION,
      newComponenrMountNodeSelector: '#mount',
      newComponentHtml: fixture_simple
    });

    it('should have public methods available via widget', () => {
    });

  });

  describe('Events', () => {
  });

  describe('Api', () => {
  });

});

