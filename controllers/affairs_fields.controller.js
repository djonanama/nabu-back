const {affairs_fields} = require("../models");


exports.findAll = (req, res) => {

  res.send(affairs_fields);

};

