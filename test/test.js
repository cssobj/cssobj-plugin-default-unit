var expect = require('chai').expect
var plugin = require('../dist/cssobj-plugin-default-unit.cjs.js')
var addUnit = plugin().value

describe('default value test', function() {

  it('should add default unit for width', function() {

    var ret = addUnit(23, 'width')
    expect(ret).equal('23px')

    var ret = addUnit('23', 'width')
    expect(ret).equal('23px')

    // zero should also add unit?
    var ret = addUnit(0, 'width')
    expect(ret).equal('0px')

    var ret = addUnit(23, 'height')
    expect(ret).equal('23px')

    var ret = addUnit(23, 'marginBottom')
    expect(ret).equal('23px')

  })



  it('should add custom unit for width', function() {

    var ret = plugin('em').value(23, 'width')
    expect(ret).equal('23em')

    var ret = plugin('em').value(23, 'height')
    expect(ret).equal('23em')

    var ret = plugin('em').value(23, 'marginBottom')
    expect(ret).equal('23em')

  })


  it('should ignore for opacity, zIndex', function() {

    var ret = addUnit(.5, 'opacity')
    expect(ret).equal(.5)

    var ret = addUnit(999, 'zIndex')
    expect(ret).equal(999)

    // line-height don't add unit
    var ret = addUnit(999.9, 'lineHeight')
    expect(ret).equal(999.9)

    // line-height don't add unit
    var ret = addUnit('1.5', 'line-height')
    expect(ret).equal('1.5')

    // line-height don't add unit
    var ret = addUnit(1.5, 'line-height')
    expect(ret).equal(1.5)

  })

  it('should allow vendor prefix like -ms-,-o-', function() {

    // wrong property will add unit!
    var ret = addUnit(.5, 'Oopacity')
    expect(ret).equal('0.5px')

    var ret = addUnit(.5, 'OOpacity')
    expect(ret).equal(.5)

    var ret = addUnit(.5, 'MsOpacity')
    expect(ret).equal(.5)

    var ret = addUnit(999, 'MsZIndex')
    expect(ret).equal(999)

    var ret = addUnit(999, '-ms-flex')
    expect(ret).equal(999)

    var ret = addUnit(999, '-webkit-opacity')
    expect(ret).equal(999)

  })

  it('should allow css hacks',function() {

    var ret = addUnit(.5, '_opacity')
    expect(ret).equal(.5)

    var ret = addUnit(.5, '*opacity')
    expect(ret).equal(.5)

    var ret = addUnit(.5, '__opacity')
    expect(ret).equal(.5)

    var ret = addUnit(.5, '__opacity\\0/')
    expect(ret).equal(.5)

    var ret = addUnit(999, '__zIndex\\0/')
    expect(ret).equal(999)

    var ret = addUnit(999, '__zindex\\0/')
    expect(ret).equal('999px')

    var ret = addUnit(999, '_-ms-z-index\\0/')
    expect(ret).equal(999)

  })

  it('corner case for emtpy "",[],{},NaN,null,undefined', function() {
    expect(addUnit('', 'opacity')).equal('')
    expect(addUnit('', 'width')).equal('')
    expect(addUnit([], 'width')).deep.equal([])
    expect(addUnit({}, 'width')).deep.equal({})
    expect(addUnit(null, 'width')).equal(null)
    expect(isNaN(addUnit(NaN, 'width'))).equal(true)
    expect(addUnit(undefined, 'width')).equal(undefined)

  })

})
