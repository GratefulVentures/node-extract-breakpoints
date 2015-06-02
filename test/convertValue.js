var fs = require('fs')
var Lab = require('lab')
var expect = require('code').expect
var lab = exports.lab = Lab.script()


var convertValue = require('../lib/convertValue')

lab.experiment('Convert value', function () {

  lab.test('"em" to "px"', function (done) {

    expect(convertValue('20em')).to.equal(320)
    done()
  })
})
