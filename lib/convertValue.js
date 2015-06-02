module.exports = function convertValue(value, previous) {
  var val = String(value).replace(/^([\d.]+)(em|px|rem)?$/i, function (m, d, unit) {
    if (! unit) {
      return d
    } else {
      switch (unit.toLowerCase()) {
      case 'em':
      case 'rem':
        return +d * 16;

      default:
        return +d
      }
    }
  })

  return +val
}
