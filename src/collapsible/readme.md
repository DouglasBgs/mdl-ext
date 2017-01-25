# Collapsible

## Semantic markup


```html
<button aria-expanded="false" aria-controls="a-collapsible" class = "mdlext-collapsible-control">A topic</div>

<div id="a-collapsible" role="region" hidden>
  <p>Topic 1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
</div>
```

```html
<h3>
  <button aria-expanded="false" class = "mdlext-collapsible-control">A topic</div>
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
A collapsible button is allways contained in a heading. The heading must have the `medext-js-collapsible` class.

```html
<h3 class="medext-js-collapsible">
  <button class="mdlext-collapsible-control" aria-expanded="false" aria-controls="a-collapsible">A topic</div>
</h3>

<div id="a-collapsible" class = "mdlext-collapsible-region" role="region" hidden>
  <p>Topic 1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
</div>
```

```html
<div class="medext-js-collapsible" role="heading">
  <div class="mdlext-collapsible-control" role="button" aria-expanded="true" aria-controls="a-collapsible">A topic</div>
</div>

<div class="mdlext-collapsible-region" id="a-collapsible" role="region">
  <p>Topic 1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
</div>
```


### One to Many

You can create a one-to-many relationship by supplying a space separated list of 
ids, representing different, simultaneously controlled elements.

```html
<div class="medext-js-collapsible" role="heading">
  <div class="mdlext-collapsible-control" role="button" aria-expanded="false" aria-controls="collapsible-1 collapsible-2">A topic</div>
</div>

<div id="collapsible-1" class="mdlext-collapsible-control" role="region" hidden>
  <p>Topic 1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
</div>

<div id="collapsible-2" class="mdlext-collapsible-control" role="region" hidden>
  <p>Topic 1 is all about being Topic 2 and may or may not have anything to do with other topics.</p>
</div>
```

### Grouping heading and collapsible to control collapsible 

Possible grouping roles

* role="region" : https://www.w3.org/WAI/GL/wiki/Using_the_region_role_to_identify_a_region_of_the_page
* role="region" : -&gt; HTML5 &lt;section&gt;
* role="presentation" : https://www.w3.org/TR/wai-aria-practices-1.1/#presentation_role
* role="group" : https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role


With grouping aria-controls and id can be omitted.

```html
<div role="presentation">
  <div class="medext-js-collapsible">
    <div role="button" aria-expanded="false"></div>
  </div>
  
  <div class="mdlext-collapsible-control">
    <p>Topic 1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
  </div>
</div>
```

Becomes.

```html
<div role="presentation">
  <div class="medext-js-collapsible" role="heading">
    <div role="button" aria-expanded="false" aria-controls="region-qxxy56uw19"></div>
  </div>
  
  <span id="region-qxxy56uw19" role="region" hidden>
    <p>Topic 1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
  </span>
</div>
```

```html
<div role="presentation">
  <div class="medext-js-collapsible">
    <div role="button" aria-expanded="false"></div>
  </div>
  
  <div class="mdlext-collapsible-control">
    <p>Topic 1.1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
  </div>
  <div class="mdlext-collapsible-control">
    <p>Topic 1.2 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
  </div>
</div>
```

Becomes.

```html
<div role="presentation">
  <div class="medext-js-collapsible" role="heading">
    <div role="button" aria-expanded="false" aria-controls="region-qxxy56uw19 region-qxxy56uw20"></div>
  </div>
  
  <div role="region" class="mdlext-collapsible-control" id="region-qxxy56uw19" hidden>
    <p>Topic 1.1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
  </div>
  <div role="region" class="mdlext-collapsible-control" id="region-qxxy56uw20" hidden>
    <p>Topic 1.2 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
  </div>
</div>
```


MDL Card

```html
<div class="demo-card-wide mdl-card mdl-shadow--2dp" role="presentation">
  <div class="mdl-card__title medext-js-collapsible" role="heading">
    <h2 class="mdl-card__title-text" role="button" aria-expanded="true" >Welcome</h2>
  </div>
  <div class="mdl-card__supporting-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris sagittis pellentesque lacus eleifend lacinia...
  </div>
  <div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      Get Started
    </a>
  </div>
  <div class="mdl-card__menu">
    <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
      <i class="material-icons">share</i>
    </button>
  </div>
</div>
```

Becomes.

```html
<div class="demo-card-wide mdl-card mdl-shadow--2dp" role="presentation">
  <div class="mdl-card__title" role="heading">
    <h2 class="mdl-card__title-text" role="button" aria-expanded="false"  aria-controls="panel-qabc56uw19">Welcome</h2>
  </div>
  <span role="region" hidden id="panel-qabc56uw19">
    <div class="mdl-card__supporting-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris sagittis pellentesque lacus eleifend lacinia...
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Get Started
      </a>
    </div>
    <div class="mdl-card__menu">
      <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">share</i>
      </button>
    </div>
  </span>  
</div>
```
