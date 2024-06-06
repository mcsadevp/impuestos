import { Cliente } from "./cliente.js";
import { Impuesto } from "./impuesto.js";

let impuesto1 = new Impuesto(200, 45);
let cliente1 = new Cliente("Maty", impuesto1);
let impuesto2 = new Impuesto(850, 65);
let cliente2 = new Cliente("Ignacio", impuesto2);
console.log(cliente1.calcularImpuesto());
console.log(cliente2.calcularImpuesto());