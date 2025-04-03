const chai = require('chai')
let assert = chai.assert
const ConvertHandler = require('../controllers/convertHandler.js')

let convertHandler = new ConvertHandler()

suite('Unit Tests', function () {
  test('convertHandler should correctly read a whole number input.', () => {
    assert.strictEqual(convertHandler.getNum('9'), 9)
  })
  test('convertHandler should correctly read a decimal number input.', () => {
    assert.strictEqual(convertHandler.getNum('4.444'), 4.444)
  })
  test('convertHandler should correctly read a fractional input.', () => {
    assert.strictEqual(
      convertHandler.getNum('10/3'),
      parseFloat((10 / 3).toFixed(16))
    )
  })
  test('convertHandler should correctly read a fractional input with a decimal.', () => {
    assert.strictEqual(convertHandler.getNum('4.111/7'), 4.111 / 7)
  })
  test('convertHandler should correctly return an error on a double-fraction input (i.e. 3/2/3).', () => {
    assert.strictEqual(convertHandler.getNum('2/3/5'), 'invalid number')
  })
  test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', () => {
    assert.strictEqual(convertHandler.getNum(''), 1)
  })
  test('convertHandler should correctly read each valid input unit.', () => {
    assert.strictEqual(convertHandler.getUnit('1gal'), 'gal')
    assert.strictEqual(convertHandler.getUnit('1L'), 'L')
    assert.strictEqual(convertHandler.getUnit('1mi'), 'mi')
    assert.strictEqual(convertHandler.getUnit('1km'), 'km')
    assert.strictEqual(convertHandler.getUnit('1lbs'), 'lbs')
    assert.strictEqual(convertHandler.getUnit('1kg'), 'kg')
  })
  test('convertHandler should correctly return an error for an invalid input unit.', () => {
    assert.strictEqual(convertHandler.getUnit('money'), 'invalid unit');
  }); 
  test('convertHandler should return the correct return unit for each valid input unit.', () => {
    assert.strictEqual(convertHandler.getReturnUnit('gal'), 'L');
    assert.strictEqual(convertHandler.getReturnUnit('L'), 'gal');
    assert.strictEqual(convertHandler.getReturnUnit('mi'), 'km');
    assert.strictEqual(convertHandler.getReturnUnit('km'), 'mi');
    assert.strictEqual(convertHandler.getReturnUnit('lbs'), 'kg');
    assert.strictEqual(convertHandler.getReturnUnit('kg'), 'lbs');
})
