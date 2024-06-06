"use strict";

var _cliente = require("./cliente.js");
var _impuesto = require("./impuesto.js");
var impuesto1 = new _impuesto.Impuesto(200, 45);
var cliente1 = new _cliente.Cliente("Maty", impuesto1);
var impuesto2 = new _impuesto.Impuesto(850, 65);
var cliente2 = new _cliente.Cliente("Ignacio", impuesto2);
console.log(cliente1.calcularImpuesto());
console.log(cliente2.calcularImpuesto());