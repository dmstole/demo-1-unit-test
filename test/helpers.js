const chai = require('chai');
const Calculadora = require('../app/Calculadora')();
const Gerador = require('./data/calculadora.data')();

global.expect = chai.expect;
global.Calculadora = Calculadora;
global.Gerador = Gerador;