var expect = require('chai').expect
var addUnit = require('../cjs/cssobj-plugin-value-default-unit.js')

describe('default value test', function() {

  it('should add default unit for width', function() {

    var ret = addUnit()('width', 23)
    expect(ret).equal('23px')

    var ret = addUnit()('marginBottom', 23)
    expect(ret).equal('23px')

  })



  it('should add custom unit for width', function() {

    var ret = addUnit('em')('width', 23)
    expect(ret).equal('23em')

  })


  it('should ignore for opacity, zIndex', function() {

    var ret = addUnit()('opacity', .5)
    expect(ret).equal(.5)

    var ret = addUnit()('zIndex', 999)
    expect(ret).equal(999)

  })

  it('should allow vendor prefix like -ms-,-o-', function() {

    var ret = addUnit()('Oopacity', .5)
    expect(ret).equal(.5)

    var ret = addUnit()('OOpacity', .5)
    expect(ret).equal(.5)

    var ret = addUnit()('MsOpacity', .5)
    expect(ret).equal(.5)

    var ret = addUnit()('Msopacity', .5)
    expect(ret).equal(.5)

    var ret = addUnit()('MsZIndex', 999)
    expect(ret).equal(999)

  })

  it('should allow css hacks',function() {

    var ret = addUnit()('_opacity', .5)
    expect(ret).equal(.5)

    var ret = addUnit()('*opacity', .5)
    expect(ret).equal(.5)

    var ret = addUnit()('__opacity', .5)
    expect(ret).equal(.5)

    var ret = addUnit()('__opacity\\0/', .5)
    expect(ret).equal(.5)

    var ret = addUnit()('__zIndex\\0/', 999)
    expect(ret).equal(999)

  })

})
