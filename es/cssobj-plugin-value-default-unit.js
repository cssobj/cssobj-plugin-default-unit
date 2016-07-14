// cssobj value plugin

var unitless = [
  'animationiterationcount',
  'boxflex',
  'boxflexgroup',
  'boxordinalgroup',
  'columns',
  'columncount',
  'fillopacity',
  'flex',
  'flexgrow',
  'flexpositive',
  'flexnegative',
  'flexorder',
  'flexshrink',
  'fontweight',
  'lineheight',
  'lineclamp',
  'opacity',
  'order',
  'orphans',
  'stopopacity',
  'strokedashoffset',
  'strokeopacity',
  'strokewidth',
  'tabsize',
  'widows',
  'zindex',
  'zoom'
]

function cssobj_plugin_value_default_unit (unit) {

  unit = unit || 'px'

  return function(value, key, node, result) {

    var base = key
      .replace(/^[^a-zA-Z]*(?:Ms|O|Webkit|Moz|Khtml)?/, '')
      .replace(/[^a-zA-Z]+$/,'')
      .toLowerCase()

    if (unitless.indexOf(base)>-1) return value

    if (isNaN(value)) return value

    return value + unit

  }

}

export default cssobj_plugin_value_default_unit;