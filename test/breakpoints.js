var fs = require('fs')
var Lab = require('lab')
var expect = require('code').expect
var lab = exports.lab = Lab.script()


var breakpoints = require('../lib/breakpoints')

lab.experiment('Breakpoints', function () {

  lab.test('using "em" units', function (done) {

    var res = breakpoints(fs.readFileSync(__dirname + '/fixtures/em-breakpoints.css', 'utf-8'))

    expect(res).to.include([320, 640])
    done()
  })
})
