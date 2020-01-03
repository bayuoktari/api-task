'use strict'
const model = require('../models').Contact
let responseSend = null
class ContactController {
    static getAllContact(req, res) {
        model.findAll({ order: [['name', 'ASC']] })
            .then(contact => {
                if (!contact) {
                    responseSend = {
                        status: 404,
                        message: "Not Found",
                        result: "You don't have any contact"
                    }
                } else {
                    responseSend = {
                        status: 200,
                        message: "OK",
                        result: contact
                    }
                }
                res.status(responseSend.status).json(responseSend)
                responseSend = null
            })
            .catch(error => {
                responseSend = {
                    status: 400,
                    message: "Bad Request",
                    result: error
                }
                res.status(responseSend.status).json(responseSend)
                responseSend = null
            })
    }
    static getContactById(req, res) {
        model.findOne({ where: req.params })
            .then(contact => {
                if (!contact) {
                    responseSend = {
                        status: 404,
                        message: 'Not Found',
                        result: `Contact with Id ${req.params.id} not found`
                    }
                } else {
                    responseSend = {
                        status: 200,
                        message: 'OK',
                        result: contact
                    }
                }
                res.status(responseSend.status).json(responseSend)
                responseSend = null
            })
            .catch(error => {
                responseSend = {
                    status: 400,
                    message: "Bad Request",
                    result: error
                }
                res.status(responseSend.status).json(responseSend)
                responseSend = null
            })
    }
    static addContact(req, res) {
        model.findOne({ where: req.body })
            .then(contactExist => {
                if (contactExist) {
                    responseSend = {
                        status: 209,
                        message: "Conflict",
                        result: `${req.body.name} ${req.body.phone} ${req.body.email} already in your contact`
                    }
                    throw responseSend
                } else {
                    return model.create(req.body)
                }
            })
            .then(success => {
                responseSend = {
                    status: 201,
                    message: "Created",
                    result: `${req.body.name} ${req.body.phone} ${req.body.email} Successfully add to your contact`
                }
                res.status(responseSend.status).json(responseSend)
                responseSend = null
            })
            .catch(error => {
                if (responseSend === null) {
                    responseSend = {
                        status: 400,
                        message: 'Bad Request',
                        result: error
                    }
                }
                res.status(responseSend.status).json(responseSend)
                responseSend = null
            })
    }
    static deleteContact(req, res) {
        model.findOne({ where: req.params })
            .then(contactFound => {
                if (!contactFound) {
                    responseSend = {
                        status: 404,
                        message: 'Not Found',
                        data: 'Contact Not Found'
                    }
                    throw responseSend
                } else {
                    return model.destroy({ where: req.params })
                }
            })
            .then(success => {
                responseSend = {
                    status: 200,
                    message: 'OK',
                    result: `Contact with Id ${req.params.id} successfully deleted`
                }
                res.status(responseSend.status).json(responseSend)
                responseSend = null
            })
            .catch(error => {
                if (responseSend === null) {
                    responseSend = {
                        status: 400,
                        message: 'Bad Request',
                        result: error
                    }
                }
                res.status(responseSend.status).json(responseSend)
                responseSend = null
            })
    }
    static editContact(req, res) {
        model.findOne({ where: req.params })
            .then(contactFound => {
                if (!contactFound) {
                    responseSend = {
                        status: 404,
                        message: 'Not Found',
                        data: 'Contact Not Found'
                    }
                    throw responseSend
                } else {
                    return model.update(req.body, { where: req.params })
                }
            })
            .then(success => {
                responseSend = {
                    status: 201,
                    message: 'OK',
                    result: 'Successfully edited contact with ID ' + req.params.id
                }
                res.status(responseSend.status).json(responseSend)
                responseSend = null
            })
            .catch(error => {
                if (responseSend === null) {
                    responseSend = {
                        status: 400,
                        message: "Bad Request",
                        result: error
                    }
                }
                res.status(responseSend.status).json(responseSend)
            })

    }
}

module.exports = ContactController
