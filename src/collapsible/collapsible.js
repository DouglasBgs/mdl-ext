/**
 * @license
 * Copyright 2016-2017 Leif Olsen. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * This code is built with Google Material Design Lite,
 * which is Licensed under the Apache License, Version 2.0
 */


/**
 * A collapsible is a component to mark expandable and collapsible regions.
 * The component use the aria-expanded state to indicate whether regions of
 * the content are collapsible, and to expose whether a region is currently
 * expanded or collapsed.
 */

import {
  IS_UPGRADED,
} from '../utils/constants';

import { randomString } from '../utils/string-utils'

const JS_COLLAPSIBLE = 'mdlext-js-collapsible';
const COLLAPSIBLE_CONTROL_CLASS = 'mdlext-collapsible-control';
const COLLAPSIBLE_REGION_CLASS = 'mdlext-collapsible-region';

/**
 * The collapsible component
 */

class Collapsible {
  element_ = null;
  controlElement_ = null;
  regionElements_ = [];

  /**
   * @constructor
   * @param {Element} element The element that this component is connected to.
   */
  constructor(element) {
    this.element_ = element;
    this.init();
  }

  get element() {
    return this.element_;
  }

  get controlElement() {
    return this.controlElement_;
  }

  get regionElements() {
    return this.regionElements_;
  }

  collapse() {
    this.regionElements.forEach(region => region.setAttribute('hidden', ''));
  }

  expand() {
    this.regionElements.forEach(region => region.removeAttribute('hidden'));
  }

  toggle() {
    if(this.controlElement.getAttribute('aria-expanded').toLowerCase() === 'false') {
      this.collapse();
    }
    else {
      this.expand();
    }
  }

  addRegion(region) {
    if(!region || this.regionElements.find(r => r === region)) {
      return;
    }
    if(!region.hasAttribute('id')) {
      region.id = `region-${randomString()}`;
      this.controlElement.setAttribute('aria-controls', region.id);
    }
    region.classList.add(COLLAPSIBLE_REGION_CLASS);

    if(this.controlElement.getAttribute('aria-expanded').toLowerCase() === 'false') {
      region.setAttribute('hidden', '');
    }
    else {
      region.removeAttribute('hidden');
    }
    this.regionElements.push(region);
  }

  removeRegion(region) {
    if(region) {
      this.regionElements_ = this.regionElements.filter(r => r === region);
      const ids = this.controlElement.getAttribute('aria-controls').split(' ')
        .filter(id => id === region.id);

      this.controlElement.setAttribute('aria-controls', ids.join(' '));
    }
  }

  init() {
    // Find the button element
    this.controlElement_ = this.element.querySelector(`.${COLLAPSIBLE_CONTROL_CLASS}`);
    if(this.controlElement === null) {
      throw new Error(`A collapsible must contain an element with class="${COLLAPSIBLE_CONTROL_CLASS}"`);
    }

    // Add "aria-expanded" attribute if not present
    if(!this.controlElement.hasAttribute('aria-expanded')) {
      this.controlElement.setAttribute('aria-expanded', 'false');
    }

    // Add role=button if control != <button>
    if(this.controlElement.nodeName.toLowerCase() !== 'button') {
      this.controlElement.setAttribute('role', 'button');
    }

    // Find collapsible region(s)
    let regions = [];
    if(this.controlElement.hasAttribute('aria-controls')) {
      // Use aria-controls
      const ids = this.controlElement.getAttribute('aria-controls').split(' ');
      regions = ids.map(id => document.querySelector(`#${id}`));
    }
    else {
      // Use sibling(s)
      let r = this.element.nextElementSibling;
      while(r) {
        if(r.classList.contains(COLLAPSIBLE_REGION_CLASS)) {
          regions.push(r);
        }
        r = r.nextElementSibling;
      }
    }

    regions.forEach(region => this.addRegion(region));

    // Add listeners

  }

}

(function() {
  'use strict';

  /**
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
  const MaterialExtCollapsible = function MaterialExtCollapsible(element) {
    this.element_ = element;
    this.collapsible = null;

    // Initialize instance.
    this.init();
  };
  window['MaterialExtCollapsible'] = MaterialExtCollapsible;

  /**
   * Initialize component
   */
  MaterialExtCollapsible.prototype.init = function() {
    if (this.element_) {
      this.collapsible = new Collapsible(this.element_);
      this.element_.classList.add(IS_UPGRADED);
    }
  };


  // Public methods.

  /**
   * Get control element.
   * @return {HTMLElement} element The element that controls the collapsible region.
   * @public
   */
  MaterialExtCollapsible.prototype.getControlElement = function() {
    return this.collapsible.controlElement;
  };
  MaterialExtCollapsible.prototype['getControlElement'] = MaterialExtCollapsible.prototype.getControlElement;

  /**
   * Add region element.
   * @param {HTMLElement} element The element that will be upgraded.
   * @return {void}
   * @public
   */
  MaterialExtCollapsible.prototype.addRegionElements = function(...elements) {
    this.collapsible.addRegion(elements);
  };
  MaterialExtCollapsible.prototype['addRegionElements'] = MaterialExtCollapsible.prototype.addRegionElements;


  // The component registers itself. It can assume componentHandler is available
  // in the global scope.
  /* eslint no-undef: 0 */
  componentHandler.register({
    constructor: MaterialExtCollapsible,
    classAsString: 'MaterialExtCollapsible',
    cssClass: JS_COLLAPSIBLE,
    widget: true
  });

})();
