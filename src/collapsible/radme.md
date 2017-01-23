# Collapsible

## Semantic markup

### Using id to control collapsible 

```html
<div role="heading">
  <div role="button" aria-expanded="false" aria-controls="a-collapsible"></div>
</div>

<div id="a-collapsible" role="region" hidden>
  <p>Topic 1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
</div>

```

### Grouping heading and collapsible to control collapsible 

With grouping the id value can be omitted.

```html
<div role="presentation">
  <div role="heading">
    <div role="button" aria-expanded="false"></div>
  </div>
  
  <p>Topic 1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
</div>
```

Becomes.

```html
<div role="presentation">
  <div role="heading">
    <div role="button" aria-expanded="false" aria-controls="panel-qxxy56uw19"></div>
  </div>
  
  <span role="region" hidden id="panel-qxxy56uw19">
    <p>Topic 1 is all about being Topic 1 and may or may not have anything to do with other topics.</p>
  </span>
</div>
```

MDL Card

```html
<div class="demo-card-wide mdl-card mdl-shadow--2dp" role="presentation">
  <div class="mdl-card__title" role="heading">
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
    <h2 class="mdl-card__title-text" role="button" aria-expanded="true"  aria-controls="panel-qabc56uw19">Welcome</h2>
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
