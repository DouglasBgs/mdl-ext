# Collapsible
A collapsible is a component to mark expandable and collapsible regions.
It has states, roles, attributes and behavior in accordance with guidelines given in 
[Using the WAI-ARIA aria-expanded state to mark expandable and collapsible regions](https://www.w3.org/WAI/GL/wiki/Using_the_WAI-ARIA_aria-expanded_state_to_mark_expandable_and_collapsible_regions).

## Introdction
The collapsible acts as a "pluggable" component. You can make virtually any HTML 
element collapsible by adding two classes, `mdlext-js-collapsible` and `mdlext-collapsible-region`. 
The collapsible component uses the 
[aria-controls](https://www.w3.org/TR/wai-aria/states_and_properties#aria-controls) 
property to hold a list of one or more collapsible regions. The 
[aria-expanded](https://www.w3.org/TR/wai-aria/states_and_properties#aria-expanded) 
state indicates whether region(s) controlled by the component is currently 
expanded or collapsed.

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

&nbsp;3. Optionally add the `mdlext-collapsible` class, which will add a pointer cursor to the collapsible component.

```html
<button class="mdlext-js-collapsible mdlext-collapsible">
  <span>Click to toggle</span>
</button>
```

&nbsp;4. Optionally add a state icon. Code a `<i>` element with class `mdlext-aria-expanded-more-less`. 
The state icon should indicate whether the collapsible region is expanded or not.

```html
<button class="mdlext-js-collapsible">
  <span>Click to toggle</span>
  <i class="mdlext-aria-expanded-more-less"></i>
</button>
```

&nbsp;5. Code a `<div>` element with class `mdlext-collapsible-region` to define the element as a collapsible region. 

```html
<div class="mdlext-collapsible-region">
</div>
```

&nbsp;6. Add content inside the collapsible region. 

```html
<div class="mdlext-collapsible-region">
  <p>Content goes here ...</p>
</div>
```

After page load, the component will add all required Aria states, roles and 
attributes not already present in markup. 

```html
<button class="mdlext-js-collapsible is-upgraded" 
  data-upgraded=",MaterialExtCollapsible" 
  aria-expanded="false" aria-controls="region-4ek31z6jeeag">
  <span>Click to toggle</span>
  <i class="mdlext-aria-expanded-more-less"></i>
</button>
<div class="mdlext-collapsible-region" id="region-4ek31z6jeeag" role="region" hidden>
  <p>Content goes here ...</p>
</div>
```

Instead of letting the collapsible component add all the WAI-ARIA stuff, 
add it in markup.

```html
<div class="mdlext-js-collapsible" role="button" 
  aria-expanded="false" aria-controls="region-1">
  <span>Click to toggle</span>
  <i class="mdlext-aria-expanded-more-less"></i>
</div>
<div class="mdlext-collapsible-region" id="region-1" role="region" hidden>
  <p>Content Region #1 goes here ...</p>
</div>
```

### Use a `<div>` element as a collapsible.

It's easier to style a div compared to a button. For example, you can not style 
a button as a flexible box! 
 
```html
<div class="mdlext-js-collapsible mdlext-collapsible" aria-expanded="true">
  <span>Click to toggle</span>
  <i class="mdlext-aria-expanded-more-less"></i>
</div>
<div class="mdlext-collapsible-region">
  <p>Content goes here ...</p>
</div>
```

For further control with styling, it is possible to wrap the button element 
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
  <p>Topic 3 is all about being Topic 3 and may or 
  may not have anything to do with other topics.</p>
</div>
```

If the `aria-controls` attribute is provided in markup, the component will not 
attempt to determine corresponding collapsible regions. In the markup above,
only `collapsible-1` and `collapsible-3` will be controlled by the component.

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

### Keyboard interaction 
* <kbd>Space</kbd> or <kbd>Enter</kbd>: toggle the corresponding collapsible region(s).

### Mouse interaction 
* <kbd>Click</kbd>: toggle the corresponding collapsible region(s).
    
## Events
The collapsible component emits a custom `toggle` event when the component is clicked, 
<kbd>Enter</kbd> key or <kbd>Space</kbd> key is pressed or one of the methods `expand`. 
`collapse` or `toggle` is called. The event is emitted before the actual toggling 
occurs. Call event.preventDefault() to cancel toggling.

The detail object parameter has the following structure:
```javascript
detail: {
  action // 'expand' or collapse'  
}
```
Set up an event listener to receive the toggle event.
```javascript
document.querySelector('#my-collapsible').addEventListener('toggle', function(e) {

  if(someCondition) {
    // Stop toggling
    e.preventDefault();
  }
  console.log('Toggle action:', e.detail.action);
});
```

## Public methods

### getControlElement()
Get the element that controls the collapsible region.

### getRegionElements()
Get region elements controlled by this collapsible.

### addRegionElements(...elements)
Add collapsible region(s).

### removeRegionElements(...elements)
Remove collapsible region(s).

### expand()
Expand corresponding collapsible region(s).

### collapse()
Collapse corresponding collapsible region(s).

### toggle()
Toggle corresponding collapsible region(s).
```javascript
const component = document.querySelector('#my-collapsible');
component.MaterialExtCollapsible.toggle();
```
### isExpanded()
Check whether component has aria-expanded state set to true.

### isDisabled()
Check whether component has aria-disabled state set to true.

### enableToggle()
Enables toggling of collapsible region(s).

### disableToggle()
Disables toggling of collapsible region(s).




### disableToggle()
Disable toggling of collapsible regions.

## Configuration options

The MDLEXT CSS classes apply various predefined visual and behavioral enhancements to the accordion. 

### Available classes and their effects.

| MDLEXT class | Effect | Remarks |
|--------------|--------|---------|
|`mdlext-js-collapsible`| Assigns basic MDL behavior to collapsible | Required |
|`mdlext-collapsible`| Defines container as an MDL component | Optional |
|`mdlext-collapsible-region`| Definescontainer as a collapsible region | Required |

### Available WAI-ARIA roles, states, and properties

| Attribute | Description | Remarks |
|-----------|-------------|---------|
|`role="button`| The element that toggles a region has role [button](http://www.w3.org/TR/wai-aria-1.1/#button) | Added by component if not present |
|`tabindex`| Indicates whether an element is focusable  | A value less than 0, e.g. -1, indicates that the element is not focusable |
|`aria-controls`| Identfies the content on the page, using IDREFs, that this collapsible controls. |  |
|`aria-expanded`| The element with role `button` has [aria-expanded](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded) set to `true` if the corresponding region(s) is open, oterwise false. | Defaults to `aria-expanded="false"`. Set `aria-expanded="true"` if you want a region to open during page load. |
|`aria-disabled`| when a collapsible is not toggable, `aria-disabled` is set to `true` | Optional. If this attribute is present, the collapsible regions will not toggle. |
|`disabled`| Indicates that a collapsible component and it's corresponding region(s) is disabled, otherwise not present. | Optional. If this attribute is present, the collapsible regions will not toggle. |
|`role="region`| Identifies an element as a collapsible region |  |
|`hidden`| Visually hides a collapsible region | Added by component if component has `aria-hidden="true"`. |
