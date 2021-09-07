'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with datoes
 */
 const Datos = use("App/Models/Dato")
 const Carros = use("App/Models/DetailVehicle")
 const { validate } = use("Validator")
class DatoController {
  /**
   * Show a list of all datoes.
   * GET datoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  async consulta ({ request, response, view }) {
    let datos = await Datos.query().count('id_general')
    let todos = datos.sort((b,a)=>a.count-b.count)
    let format = []

    for (var i = 0; todos.length > 16 ? i < 16 : i < todos.length ; i++) {
      todos[i].misma = await Carros.find(todos[i]._id)
      format.push(todos[i])

    }
    response.send(format)
  }

  /**
   * Render a form to be used for creating a new dato.
   * GET datoes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new dato.
   * POST datoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
   async store ({ request, response }) {
    let requestAll = request.all()
    const validation = await validate(requestAll, Datos.fieldValidationRules())
    if (validation.fails()) {
      response.unprocessableEntity(validation.messages())
    } else {
      let body = request.only(Datos.fillable)
      const datos = await Datos.create(body)
      response.send(datos)
    }
  }

  /**
   * Display a single dato.
   * GET datoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing dato.
   * GET datoes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update dato details.
   * PUT or PATCH datoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a dato with id.
   * DELETE datoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = DatoController
