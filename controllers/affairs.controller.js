const db = require("../models");
const Affairs = db.affairs;
const Op = db.Sequelize.Op;

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  let limit = 20;
  let offset = 0;

  if(req.query.limit){
    limit = req.query.limit;
  }

  if(req.query.offset){
    offset = req.query.offset;
  }

  Affairs.findAll({ where: condition, offset, limit })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving affairs."
      });
    });
};

// Find a single Affairs with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Affairs.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Affairs with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Affairs with id=" + id
      });
    });
};