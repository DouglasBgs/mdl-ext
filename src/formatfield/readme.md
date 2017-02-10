#Formatfield
The formatfield component formats an input field using
language sensitive **numberformatting**. It acts as a "pluggable"
component. It can be added to a `mdl-textfield` component or to
a `<input>` element.

## To include a MDLEXT formatfield component:

&nbsp;1. Code a single-line `mdl-textfield` component.
```html
<div class="mdl-textfield mdl-js-textfield">
  <input class="mdl-textfield__input" type="text" 
    pattern="-?[0-9 ]*([\.,][0-9]+)?" value="1234.5">
  
  <label class="mdl-textfield__label">Number...</label>
  <span class="mdl-textfield__error">Input is not a number!</span>
</div>
```

&nbsp;2. Add the `mdlext-js-formatfield` class to define the element as a formatfield component.
```html
<div class="mdl-textfield mdl-js-textfield mdlext-js-formatfield">
  <input class="mdl-textfield__input" type="text" 
    pattern="-?[0-9 ]*([\.,][0-9]+)?" value="1234.5">
  
  <label class="mdl-textfield__label">Number...</label>
  <span class="mdl-textfield__error">Input is not a number!</span>
</div>
```

&nbsp;3. Optionally add a `data-formatfield-options` attribute with the given 
[locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation). 
If this step is omitted, the formatfield component uses the browser language as it's locale.
```html
<div class="mdl-textfield mdl-js-textfield mdlext-js-formatfield"
  data-formatfield-options="{'locales': 'nb-NO'}">

  <input class="mdl-textfield__input" type="text" 
    pattern="-?[0-9 ]*([\.,][0-9]+)?" value="1234.5">
  <label class="mdl-textfield__label">Number...</label>
  <span class="mdl-textfield__error">Input is not a number!</span>
</div>
```
