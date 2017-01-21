import {
  IS_UPGRADED,
} from '../utils/constants';

const JS_COLLAPSIBLE = 'mdlext-js-collapsible';


(function() {
  'use strict';

  /**
   * @constructor
   * @param {Element} element The element that will be upgraded.
   */
  const MaterialExtCollapsible = function MaterialExtCollapsible(element) {
    this.element_ = element;

    // Initialize instance.
    this.init();
  };
  window['MaterialExtCollapsible'] = MaterialExtCollapsible;

  /**
   * Initialize component
   */
  MaterialExtCollapsible.prototype.init = function() {
    if (this.element_) {
      this.element_.classList.add(IS_UPGRADED);
    }
  };

  // The component registers itself. It can assume componentHandler is available
  // in the global scope.
  /* eslint no-undef: 0 */
  componentHandler.register({
    constructor: MaterialExtCollapsible,
    classAsString: 'MaterialExtCollapsible',
    cssClass: JS_COLLAPSIBLE,
    widget: true
  });

  // Public methods.

})();
