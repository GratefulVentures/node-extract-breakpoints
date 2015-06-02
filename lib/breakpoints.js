var parser = require('css').parse
var mediaQuery = require('./parseMediaQuery')
var convertValue = require('./convertValue')

module.exports = function (css) {
  var baseFontSize = 16

  var ast = parser(css, { silent: true })

  var mqs = []

  ast.stylesheet.rules.forEach(function (style) {
    if (style.type == 'rule') {
      if (style.selectors.map(function (str) { return str.toLowerCase(); }).indexOf('html') != -1) {
        style.declarations.forEach(function (prop) {
          if (prop.property === 'font-size') {
            baseFontSize = prop.value
          }
        })
      }
    }

    if (style.type == 'media') {
      if (-1 === mqs.indexOf(style.media)) {
        mqs.push(style.media)
      }
    }
  })

  var breakpoints = []

  mqs = mqs.map(mediaQuery)

  mqs.forEach(function (mq) {
    if (mq.minWidth > 0) {
      if (-1 === breakpoints.indexOf(mq.minWidth)) {
        breakpoints.push(mq.minWidth)
      }
    }
  })
  mqs.forEach(function (mq) {
    if (mq.maxWidth !== Infinity) {
      var minWidth = mq.maxWidth + 1

      if (-1 === breakpoints.indexOf(mq.maxWidth) && -1 === breakpoints.indexOf(minWidth)) {
        breakpoints.push(mq.maxWidth)
      }
    }
  })

  return breakpoints.sort(function (a, b) {
    return a - b
  })
}
