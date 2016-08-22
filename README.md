# cssobj-plugin-default-unit

[![Build Status](https://travis-ci.org/cssobj/cssobj-plugin-default-unit.svg?branch=master)](https://travis-ci.org/cssobj/cssobj-plugin-default-unit)

Add default unit to css numeric-like values, which have to specify an unit.

## Install

``` javascript
npm install cssobj/cssobj-plugin-default-unit
```

## Usage

``` javascript
var cssobj_core = require('cssobj-core')
var defaultUnit = require('cssobj-plugin-default-unit')
var cssobj = cssobj_core({plugins: [ defaultUnit('px') ]})

var obj = { p: { fontSize: 12 } }
var result = cssobj(obj)

// the css: p {font-size: 12px;}
```

## API

### `var plugin = defaultUnit(unit)`

Get plugin function to apply, pass unit.

### *PARAMS*

### `unit`

 - Type: string
 - Default: 'px'

The unit as default unit to add to numeric-like values, accordingly to [Unitless List](https://github.com/cssobj/cssobj-plugin-default-unit/blob/master/src/cssobj-plugin-default-unit.js#L5)

### *RETURN*

A function can be as cssobj plugin.


## Example

``` javascript
defaultUnit()  // default unit is 'px'

defaultUnit('em')  // default unit is 'em'
```



