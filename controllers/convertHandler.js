function ConvertHandler () {
  this.getNum = function (input) {
    let result = input.replace(/[^0-9.\/]/g, '')

    if (result == '') return 1
    if (!/^(?!\/)(\d*\.?\d+\/\d+(\.\d+)?)?$|^(\d*\.?\d+)$/.test(result))
      return 'invalid number'
    return Math.round(eval(result) * 10000000000000000) / 10000000000000000
  }

  this.getUnit = function (input) {
    let result = input.replace(/[^a-zA-Z]/gi, '').toLowerCase()
    let units = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']

    if (!units.includes(result)) return 'invalid unit'
    if (result == 'l') return 'L'
    return result
  }

  this.getReturnUnit = function (initUnit) {
    if(unitMap[initUnit]) return unitMap[initUnit].to;
    return "invalid unit";
  }

  this.spellOutUnit = function (unit) {
    let result

    return result
  }

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934
    let result

    return result
  }

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result

    return result
  }
}

module.exports = ConvertHandler
