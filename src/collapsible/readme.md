# Collapsible
A WAI-ARIA friendly collapsible component/widget with state, roles, attributes and behavior in 
accordance with the guidelines given in 
[Using the WAI-ARIA aria-expanded state to mark expandable and collapsible regions](https://www.w3.org/WAI/GL/wiki/Using_the_WAI-ARIA_aria-expanded_state_to_mark_expandable_and_collapsible_regions).

## Introdction
The collapsible acts as a "pluggable" component. You can make virtually any HTML 
element collapsible by adding two classes, `mdlext-js-collapsible` and `mdlext-collapsible-region`. 
The collapsible component uses the 
[aria-controls](https://www.w3.org/TR/wai-aria/states_and_properties#aria-controls) 
property to hold a list of one or more collapsible regions. The 
[aria-expanded](https://www.w3.org/TR/wai-aria/states_and_properties#aria-expanded) state 
is used to indicate whether region(s) controlled by the component are collapsible, and to 
expose whether a region is currently expanded or collapsed.

## To include a MDLEXT collapsible component:
&nbsp;1. Code a `<button>` element; this is the clickable toggle that will show and hide the collapsible 
region(s). Inside the button, code a `<span>` element to hold the button caption text.

```html
<button>
  <span>Click to toggle</span>
</button>
```

&nbsp;2. Add the `mdlext-js-collapsible` class to define the element as a collapsible component.

```html
<button class="mdlext-js-collapsible">
  <span>Click to toggle</span>
</button>
```

&nbsp;3. Optionally add a state icon. Code a `<i>` element with class `mdlext-aria-expanded-more-less`. 
The state icon should indicate whether the collapsible region is expanded or not.

```html
<button class="mdlext-js-collapsible">
  <span>Click to toggle</span>
  <i class="mdlext-aria-expanded-more-less"></i>
</button>
```

&nbsp;4. Code a `<div>` element with class `mdlext-collapsible-region` to define the element as a collapsible region. 

```html
<div class="mdlext-collapsible-region">
</div>
```

&nbsp;5. Add content inside the collapsible region. 

```html
<div class="mdlext-collapsible-region">
  <p>Content goes here ...</p>
</div>
```

After page load, the component will add all required Aria states, roles and 
attributes not already present in markup. 

```html
<button class="mdlext-js-collapsible is-upgraded" 
  data-upgraded=",MaterialExtCollapsible" aria-expanded="false" aria-controls="region-4ek31z6jeeag">
  <span>Click to toggle</span>
  <i class="mdlext-aria-expanded-more-less"></i>
</button>
<div class="mdlext-collapsible-region" id="region-4ek31z6jeeag" role="region" hidden>
  <p>Content goes here ...</p>
</div>
```

Instead of letting the collapsible component add all the WAI-ARIA stuff, add it in markup.

```html
<button class="mdlext-js-collapsible" 
  aria-expanded="false" aria-controls="region-1">
  <span>Click to toggle</span>
  <i class="mdlext-aria-expanded-more-less"></i>
</button>
<div class="mdlext-collapsible-region" id="region-1" role="region" hidden>
  <p>Content Region #1 goes here ...</p>
</div>
```

### Use a `<div>` element as a collapsible.

It's easier to style a div compared to a button. For example, you can not style 
a button as a flexible box! Optionally add the `mdlext-collapsible` class, which
will add a pointer cursor to the collapsible component.
 
```html
<div class="mdlext-js-collapsible mdlext-collapsible" aria-expanded="true">
  <span>Click to toggle</span>
  <i class="mdlext-aria-expanded-more-less"></i>
</div>
<div class="mdlext-collapsible-region">
  <p>Content goes here ...</p>
</div>
```

For further control with styling, it is possible to wrap the button elementt 
inside the collapsible component. The wrapped element becomes the clickable/focusable
area and **must** have class `mdlext-collapsible` applied.

```html
<header class="mdlext-js-collapsible" aria-expanded="true">
  <div class="mdlext-collapsible"> 
    <span>Click to toggle</span>
    <i class="mdlext-aria-expanded-more-less"></i>
  </div>  
</header>
<div class="mdlext-collapsible-region">
  <p>Content goes here ...</p>
</div>
```

### one-to-many

You can create a one-to-many relationship by supplying a space separated list of 
ids, representing different, simultaneously controlled elements.

```html
<div class="medext-js-collapsible">
  <div class="mdlext-collapsible" role="button" aria-expanded="false" 
    aria-controls="collapsible-1 collapsible-3">A topic</div>
</div>

<div id="collapsible-1" class="mdlext-collapsible" role="region" hidden>
  <p>Topic 1 is all about being Topic 1 and may or 
  may not have anything to do with other topics.</p>
</div>

<div id="collapsible-2" class="mdlext-collapsible" role="region" hidden>
  <p>Topic 2 is all about being Topic 2 and may or 
  may not have anything to do with other topics.</p>
</div>

<div id="collapsible-3" class="mdlext-collapsible" role="region" hidden>
  <p>Topic 3 is all about being Topic 2 and may or 
  may not have anything to do with other topics.</p>
</div>
```

If the `aria-controls` attribute is provided in markup, the component will not 
attempt to determine corresponding collapsible regions. In the markup above,
only `collapsible-1` and `collapsible-2` will be controlled by the component.

Remove the `aria-controls` attribute if you want the component to determine which 
collapsible regions are to be included.

### Examples

**Collapsibles, with many collapsible regions.**

```html
<!-- first collapsible -->
<button class="mdlext-js-collapsible mdlext-collapsible">
  <span>Click to toggle collapsible #1</span>
  <i class="mdlext-aria-expanded-more-less"></i>
</button>
<div class="mdlext-collapsible-region">
  <p>#1.1</p>
</div>
<div class="mdlext-collapsible-region">
  <p>#1.2</p>
</div>

<!-- second collapsible -->
<header class="mdlext-js-collapsible mdlext-collapsible">
  <span>Click to toggle collapsible #2</span>
  <i class="mdlext-aria-expanded-more-less"></i>
</header>
<div class="mdlext-collapsible-region">
  <p>#2.1</p>
</div>

<p>This paragraph will not collapse</p>

<div class="mdlext-collapsible-region">
  <p>#2.2</p>
</div>
<div class="mdlext-collapsible-region">
  <p>#2.3</p>
</div>
```

**Nested collapsibles.**

```html
<style>
  .mdlext-collapsible-region .mdlext-js-collapsible,
  .mdlext-collapsible-region .mdlext-collapsible-region {
    margin-left: 16px;
  }
</style>

<button class="mdlext-js-collapsible mdl-button mdl-button--colored mdl-button--raised">
  Click to toggle
</button>
<div class="mdlext-collapsible-region">
  <p>A collapsible region</p>

  <button class="mdlext-js-collapsible mdl-button mdl-button--accent mdl-button--raised">
    Click to toggle nested #1
  </button>
  <div class="mdlext-collapsible-region">
    <p>A nested collapsible region</p>

    <button class="mdlext-js-collapsible mdl-button mdl-button--raised 
      mdl-button--colored mdl-color--deep-orange-100">
      Click to toggle nested #2
    </button>
    <div class="mdlext-collapsible-region">
      <p>Last region</p>
    </div>
  </div>
</div>
```

**Collapsible MDL Card.**

```html
<div class="mdl-card mdl-card mdl-shadow--2dp">
  <header class="mdl-card__title mdlext-js-collapsible mdlext-collapsible 
    mdl-color--accent mdl-color-text--accent-contrast" aria-expanded="true">
    <h2 class="mdl-card__title-text">A Collapsible Card</h2>
  </header>
  <div class="mdl-card__supporting-text mdlext-collapsible-region">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris sagittis pellentesque lacus eleifend lacinia...
  </div>
  <footer class="mdl-card__actions mdl-card--border mdlext-collapsible-region">
    <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      Get Started
    </button>
  </footer>
  <div class="mdl-card__menu">
    <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
      <i class="material-icons">share</i>
    </button>
  </div>
</div>
```

**Create your own state icon with SASS.**

The [_mixins.scss](../_mixins.scss) has a mixin which can be used to create custom state icons.  

```sass
@charset "UTF-8";
.my-aria-expanded-state {
  @include mdlext-aria-expanded-toggle($icon: 'arrow_downward', $icon-expanded: 'arrow_upward');
}
```

### More examples
* The [snippets/collapsible.html](./snippets/collapsible.html) and the [tests](../../test/collapsible/collapsible.spec.js) provides more detailed examples.
* Try out the [live demo](http://leifoolsen.github.io/mdl-ext/demo/collapsible.html)


## Characteristics

### Keyboard interaction, Control Button 
* With focus on the button:
    * <kbd>Space</kbd> or <kbd>Enter</kbd>: opens the menu, sets `aria-expanded="true"`.

### Mouse interaction, Control Button 
* With focus on the button:
    * <kbd>Click</kbd>: opens the menu, sets `aria-expanded="true"`, and place focus on the previously selected menu item - or on the first menu item if no selected menu item.
    * <kbd>Click</kbd>: a second click closes the menu, sets `aria-expanded="false"` and place focus on button.
    

## WAI-ARIA Roles, States, and Properties
The menu button has the following roles, states and properties set by the menu button component.

### Control Button
* `role="button"`: the element that collaspes a region has role [button](http://www.w3.org/TR/wai-aria-1.1/#button).
* `aria-controls`: identfies the content on the page, using IDREFs, that this menu button controls.
* `aria-expanded`: the element with role `button` has [aria-expanded](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded) set to `true` if the corresponding menu is open, oterwise false.
* `aria-disabled`: when a menu item is disabled, `aria-disabled` is set to `true`.
* `disabled"`: indicates that a button is disabled, otherwise not present.
* `tabindex`:

### Collapsible region, WAI-ARIA Roles
* `role="region"`: identifies the element as a menu widget.
* `hidden`: the menu has attrubute hidden if the controlling buttoun has `aria-expanded="false"`, otherwise the attribute is not present.

## Events emitted from the component
The collapsible emits a `click` event when a collapsible is clicked, or <kbd>Enter</kbd> key or <kbd>Space</kbd> 
key is pressed when collapsible having focus. 

```javascript
detail: { 
  source: item // The selected menu item 
}
```

To set up an event listener to receive the select custom event.
```javascript
document.querySelector('#my-menubutton').addEventListener('menuselect', function(e) {
  console.log('menu item selected:', e.detail.source);
});
```
Refer to [snippets/menu-button.html](./snippets/menu-button.html) or the [tests](../../test/menu-button/menu-button.spec.js) for detailed usage.


## Semantic markup


```html
<button aria-expanded="false" aria-controls="a-collapsible" class = "mdlext-collapsible">A topic</div>

<div id="a-collapsible" role="region" hidden>
  <p>Topic 1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
</div>
```

```html
<h3>
  <button aria-expanded="false" class = "mdlext-collapsible">A topic</div>
</h3>

<div id="a-collapsible" role="region" hidden>
  <p>Topic 1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
</div>
```

```html
<div role="heading">
  <div role="button" aria-expanded="false" aria-controls="a-collapsible">A topic</div>
</div>

<div id="a-collapsible" role="region" hidden>
  <p>Topic 1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
</div>
```

```html
<h3 id="a-topic-label">A topic</h3>
<button aria-expanded="false" aria-controls="a-collapsible">A topic</div>

<div id="a-collapsible" role="region" aria-labelledby="a-topic-label" hidden>
  <p>Topic 1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
</div>
```

### Requirements for this component
A collapsible button is allways contained in an element having `class="medext-js-collapsible"`.

```html
<h3 class="medext-js-collapsible">
  <button class="mdlext-collapsible" aria-expanded="false" aria-controls="a-collapsible">A topic</div>
</h3>

<div id="a-collapsible" class = "mdlext-collapsible-region" role="region" hidden>
  <p>Topic 1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
</div>
```

```html
<div class="medext-js-collapsible" role="heading">
  <div class="mdlext-collapsible" role="button" aria-expanded="true" aria-controls="a-collapsible">A topic</div>
</div>

<div class="mdlext-collapsible-region" id="a-collapsible" role="region">
  <p>Topic 1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
</div>
```



### Grouping heading and collapsible to control collapsible 

Possible grouping roles

* role="region" : https://www.w3.org/WAI/GL/wiki/Using_the_region_role_to_identify_a_region_of_the_page
* role="region" : -&gt; HTML5 &lt;section&gt;
* role="presentation" : https://www.w3.org/TR/wai-aria-practices-1.1/#presentation_role
* role="group" : https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role


