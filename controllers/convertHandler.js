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
    switch (initUnit) {
      case 'gal':
        return 'L'
      case 'l':
      case 'L':
        return 'gal'
      case 'mi':
        return 'km'
      case 'km':
        return 'mi'
      case "lbs":
        return "kg";
      case "kg":
        return "lbs";
      default:
        return 'invalid unit'
    }
  }

  this.spellOutUnit = function (unit) {
    switch (unit) {
      case 'gal':
        return "gallons";
      case 'L':
        return 'liters';
      case 'mi':
        return "miles";
      case 'km':
        return "kilometers";
      case 'lbs':
        return "pounds";
      case 'kg':
        return 'kilograms';
      default:
        return 'invalid unit';
    }
  }

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934

    switch (initUnit) {
      case 'gal' :
        return initNum * galToL;
      case 'L':
        return (initNum / galToL).toFixed(5);
      case 'mi':
        return initNum * miToKm;
      case 'km':
        return (initNum / miToKm).toFixed(5);
      case 'lbs':
        return initNum * lbsToKg;
      case 'kg':
        return (initNum / lbsToKg).toFixed(5); 
      default:
        return "bad unit input to convert"
    }
  }

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result

    return result
  }
}

module.exports = ConvertHandler
