var cssobj_plugin_default_unit = (function () {
'use strict';

// helper functions for cssobj

// check n is numeric, or string of numeric


function own(o, k) {
  return {}.hasOwnProperty.call(o, k)
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
var random = (function () {
  var count = 0;
  return function (prefix) {
    count++;
    return '_' + (prefix||'') + Math.floor(Math.random() * Math.pow(2, 32)).toString(36) + count + '_'
  }
})();

// extend obj from source, if it's no key in obj, create one


// ensure obj[k] as array, then push v into it
function arrayKV (obj, k, v, reverse, unique) {
  obj[k] = k in obj ? [].concat(obj[k]) : [];
  if(unique && obj[k].indexOf(v)>-1) return
  reverse ? obj[k].unshift(v) : obj[k].push(v);
}

// replace find in str, with rep function result


// get parents array from node (when it's passed the test)


// split selector etc. aware of css attributes


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
  // "line-height",  /* alway add unit unless it's not number */
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
      return (!value || typeof value !== 'number'
              || unitless.indexOf(base)>-1
             )
        ? value
        : value + unit

    }
  }

}

return cssobj_plugin_default_unit;

}());
