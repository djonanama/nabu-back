var router = require('express').Router();
const affairs_fields = require("../../controllers/affairs_fields.controller.js");

var auth = require('../auth');

router.get("/",auth.required, affairs_fields.findAll);

module.exports = router;