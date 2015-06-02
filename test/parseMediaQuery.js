var fs = require('fs')
var Lab = require('lab')
var expect = require('code').expect
var lab = exports.lab = Lab.script()


var parse = require('../lib/parseMediaQuery')

lab.experiment('Parsing media queries', function() {

  lab.test('(min-width: 10px)', function (done) {
    expect(parse('(min-width: 10px)')).to.include({
      minWidth: 10
    })
    done()
  })

  lab.test('(min-width: 10em)', function (done) {
    expect(parse('(min-width: 10em)')).to.include({
      minWidth: 160
    })
    done()
  })
})
