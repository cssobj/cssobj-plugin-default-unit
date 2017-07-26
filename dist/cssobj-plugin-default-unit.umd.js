(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('cssobj_plugin_default_unit', factory) :
	(global.cssobj_plugin_default_unit = factory());
}(this, (function () { 'use strict';

// helper functions for cssobj

// check n is numeric, or string of numeric
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}



// set default option (not deeply)


// convert js prop into css prop (dashified)
function dashify(str) {
  return str.replace(/[A-Z]/g, function(m) {
    return '-' + m.toLowerCase()
  })
}

// capitalize str


// repeat str for num times


// random string, should used across all cssobj plugins


// extend obj from source, if it's no key in obj, create one


// ensure obj[k] as array, then push v into it


// replace find in str, with rep function result


// get parents array from node (when it's passed the test)


// split selector with comma, aware of css attributes


// split selector with splitter, aware of css attributes


// split char aware of syntax


// checking for valid css value

// cssobj value plugin

var unitless = [
  "animation-iteration-count",
  "box-flex",
  "box-flex-group",
  "box-ordinal-group",
  "columns",
  "column-count",
  "fill-opacity",
  "flex",
  "flex-grow",
  "flex-positive",
  "flex-negative",
  "flex-order",
  "flex-shrink",
  "font-weight",
  "line-height",  /* 1.5 or 22px? so don't add unit here */
  "line-clamp",
  "opacity",
  "order",
  "orphans",
  "stop-opacity",
  "stroke-dash-offset",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "widows",
  "z-index",
  "zoom"
];


function cssobj_plugin_default_unit (unit) {

  unit = unit || 'px';

  return {
    value: function(value, key, node, result) {

      var base = dashify(key).replace(
          /^[^a-zA-Z]*(?:ms-|o-|webkit-|moz-|khtml-)?|[^a-zA-Z]+$/g,
        '');

      // here **ignored** value===''||value===null,
      // which is false for isNaN.
      // cssobj never have this value
      return (!isNumeric(value)
              || unitless.indexOf(base)>-1
             )
        ? value
        : value + unit

    }
  }

}

return cssobj_plugin_default_unit;

})));
