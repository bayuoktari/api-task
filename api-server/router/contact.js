'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controller/contactController')

router.get('/', controller.getAllContact)
router.get('/:id', controller.getContactById)
router.post('/add', controller.addContact)
router.put('/edit/:id', controller.editContact)
router.delete('/delete/:id', controller.deleteContact)
module.exports = router