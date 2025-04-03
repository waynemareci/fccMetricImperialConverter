'use strict';

const expect = require('chai').expect;
const { application } = require('express');
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert',(req,res) => {
    console.log("api/convert req.query.input: " + req.query.input)
    //if (!req.query.input) res.send("invalid unit")
    var regex = /([a-zA-Z]+)$/;
    const matchEnd = req.query.input.match(regex)
    regex = /^([^a-zA_Z]+)/
    const matchBeginning = req.query.input.match(regex)
    //console.log("Found input value " + matchBeginning[0] + "; input unit " + matchEnd[0])
    //console.log(convertHandler.getString(matchBeginning[0],matchEnd[0],convertHandler.convert(matchBeginning[0].matchEnd[0]),convertHandler.getReturnUnit(matchEnd[0])))
    
    const input = req.query.input;
    const num = convertHandler.getNum(input);
    const unit = convertHandler.getUnit(input);
    const returnUnit = convertHandler.getReturnUnit(unit);
    const returnNum = convertHandler.convert(num, unit);
    const string = convertHandler.getString(num, convertHandler.spellOutUnit(unit), returnNum, convertHandler.spellOutUnit(returnUnit))

    if (num === 'invalid number' && unit === 'invalid unit') res.json('invalid number and unit');
    if (num === 'invalid number') res.json('invalid number');
    if (unit === 'invalid unit') res.json('invalid unit');
    else {
      res.json({
        initNum: num,
        initUnit: unit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: string,
      });
    }
  })

};
