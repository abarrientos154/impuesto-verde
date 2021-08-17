'use strict'

// const Helpers = use('Helpers')
// const mkdirp = use('mkdirp')
// const fs = require('fs')
// var randomize = require('randomatic');
const axios = require('axios')
var moment = require('moment');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with uploads
 */
class UploadController {

  async dataValueUtm ({ response }) {
    const data = await axios({
      method: 'post',
      url: 'https://www.calcular.cl/index.php/utm/ajax_call',
      data: {
        searchDate: moment().format('YYYY-MM-DD')
      }
    })
    console.log(data.data, '73486784')
    response.send(data.data)
  }
}

module.exports = UploadController
