'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Dato extends Model {
  static get fillable() {
    return ['marca', 'tipo', 'modelo', 'nox', 'rendimiento', 'precio', 'valor_utm', 'impuesto' ]
  }
  static fieldValidationRules() {
    const rulesUser = {
      marca: "string",
      tipo: "string",
      modelo: "string",
      nox: "number",
      rendimiento: "number",
      valor_utm: "number",
      precio: "number",
      impuesto: "number"
    }
    return rulesUser
  }
}

module.exports = Dato
