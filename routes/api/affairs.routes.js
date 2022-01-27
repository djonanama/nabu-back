var router = require('express').Router();
const affairs = require("../../controllers/affairs.controller.js");

var auth = require('../auth');

router.get("/",auth.required, affairs.findAll);
router.get("/:id", auth.required,affairs.findOne);

module.exports = router;