const express=require('express')
const route =express.Router()
const formConnteroller=require('../controller/formController.js')

route.post('/saveData', formConnteroller.saveData)
route.get('/getData',formConnteroller.getData)


module.exports=route