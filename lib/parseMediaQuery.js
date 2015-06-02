var mediaQuery = require('css-mediaquery')
var convertValue = require('./convertValue')

var baselinePx = 16

module.exports = function (query) {
  var ast = mediaQuery.parse(query)

  var mq = {
    minWidth: 0,
    maxWidth: Infinity
  }

  ast.forEach(function (item) {
    item.expressions.forEach(function (exp) {
      switch (exp.modifier) {
      case 'min':
        if (exp.feature === 'width') {
          mq.minWidth = convertValue(exp.value)
        }
        break

      case 'max':
        if (exp.feature === 'width') {
          mq.maxWidth = convertValue(exp.value)
        }
        break
      }
    })
  })

  return mq
}
