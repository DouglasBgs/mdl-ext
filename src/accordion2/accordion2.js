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

import {
  IS_UPGRADED,
} from '../utils/constants';

const JS_ACCORDION = 'mdlext-js-accordion2';

class Accordion {
  element_ = null;

  constructor(element) {
    this.element_ = element;
    this.init();
  }

  init() {
  }

  downgrade() {
  }

}


(function() {
  'use strict';

  /**
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
  const MaterialExtAccordion2 = function MaterialExtAccordion2(element) {
    this.element_ = element;
    this.accordion_ = null;

    // Initialize instance.
    this.init();
  };
  window['MaterialExtAccordion2'] = MaterialExtAccordion2;

  /**
   * Initialize component
   */
  MaterialExtAccordion2.prototype.init = function() {
    if (this.element_) {
      this.accordion_ = new Accordion(this.element_);
      this.element_.classList.add(IS_UPGRADED);

      // Listen to 'mdl-componentdowngraded' event
      this.element_.addEventListener('mdl-componentdowngraded', this.mdlDowngrade_.bind(this));
    }
  };

  /*
   * Downgrade component
   * E.g remove listeners and clean up resources
   */
  MaterialExtAccordion2.prototype.mdlDowngrade_ = function() {
    this.accordion_.downgrade();
  };


  // Public methods.

  // The component registers itself. It can assume componentHandler is available
  // in the global scope.
  /* eslint no-undef: 0 */
  componentHandler.register({
    constructor: MaterialExtAccordion2,
    classAsString: 'MaterialExtAccordion2',
    cssClass: JS_ACCORDION,
    widget: true
  });

})();
