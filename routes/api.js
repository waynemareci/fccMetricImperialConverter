'use strict';

const expect = require('chai').expect;
const { application } = require('express');
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert',(req,res) => {
    console.log("api/convert req.query.input: " + req.query.input)
    var regex = /([a-zA-Z]+)$/;
    const matchEnd = req.query.input.match(regex)
    regex = /^([^a-zA_Z]+)/
    const matchBeginning = req.query.input.match(regex)
    console.log("Found " + matchBeginning[0] + " input value; " + matchEnd[0] + " input unit")
  })

};
