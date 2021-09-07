'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Dato extends Model {
  static get fillable() {
    return ['marca', 'tipo', 'modelo', 'nox', 'rendimiento', 'precio', 'valor_utm', 'impuesto', 'valor_pesos', 'id_general' ]
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
      impuesto: "number",
      valor_pesos: "number",
      id_general: "string"
    }
    return rulesUser
  }
  misma () {
    console.log('1314')
    return this.hasOne('App/Models/DetailVehicle', 'id_general', '_id')
  }
}

module.exports = Dato
