define('cssobj_plugin_value_default_unit', function () { 'use strict';

  // cssobj value plugin

  var unitless = [
    'animationIterationCount',
    'boxFlex',
    'boxFlexGroup',
    'boxOrdinalGroup',
    'columns',
    'columnCount',
    'fillOpacity',
    'flex',
    'flexGrow',
    'flexPositive',
    'flexNegative',
    'flexOrder',
    'flexShrink',
    'fontWeight',
    'lineHeight',
    'lineClamp',
    'opacity',
    'order',
    'orphans',
    'stopOpacity',
    'strokeDashOffset',
    'strokeOpacity',
    'strokeWidth',
    'tabSize',
    'widows',
    'zIndex',
    'zoom'
  ]

  var unitlessDash = unitless.map(function(v) {
    return v.replace(/[A-Z]/g, function(m) {
      return '-' + m.toLowerCase()
    })
  })

  function cssobj_plugin_value_default_unit (unit) {

    unit = unit || 'px'

    return function(value, key, node, result) {

      var bare = key.replace(
          /^[^a-zA-Z]*(?:Ms|O|Webkit|Moz|Khtml|ms-|o-|webkit-|moz-|khtml-)?|[^a-zA-Z]+$/g,
        '')

      var base = bare.charAt(0).toLowerCase() + bare.substr(1)

      // here ignored value===''||value===null,
      // which is false for isNaN.
      // cssobj never have this value
      return (isNaN(value)
              || unitless.indexOf(base)>-1
              || unitlessDash.indexOf(base)>-1
             )
        ? value
        : value + unit

    }

  }

  return cssobj_plugin_value_default_unit;

});