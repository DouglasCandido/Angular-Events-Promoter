const db = require("../models");

const Enthusiast = db.enthusiasts;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    // Validate request
    /*
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    */
  
    const enthusiast = {
      name_enthusiast: req.body.name_enthusiast,
      cpf: req.body.cpf,
      sex: req.body.sex,
      birthDate: req.body.birthDate,
      username: req.body.username,
      password_enthusiast: req.body.password_enthusiast,
      contactEmail: req.body.contactEmail,
      contactPhone: req.body.contactPhone,
      state: req.body.state,
      city: req.body.city,
      district: req.body.district,
      street: req.body.street,
      number_place: req.body.number_place,
      zipCode: req.body.zipCode
    };
  
    Enthusiast.create(enthusiast)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Enthusiast."
        });
      });
};

exports.findAll = (req, res) => {

    const name_enthusiast = req.query.name_enthusiast;

    var condition = name_enthusiast ? { name_enthusiast: { [Op.like]: `%${name_enthusiast}%` } } : null;
  
    Enthusiast.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Enthusiasts."
        });
      });
};

exports.findOne = (req, res) => {

    const cpf = req.params.cpf;
  
    Enthusiast.findByPk(cpf)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Enthusiast with cpf=" + cpf
        });
      });
};

exports.update = (req, res) => {

    const cpf = req.params.cpf;
  
    Enthusiast.update(req.body, {
      where: { cpf: cpf }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Enthusiast was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Enthusiast with cpf=${cpf}. Maybe Enthusiast was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Enthusiast with id=" + id
        });
      });
};

exports.deleteOne = (req, res) => {

    const cpf = req.params.cpf;
  
    Enthusiast.destroy({
      where: { cpf: cpf }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Enthusiast was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Enthusiast with cpf=${cpf}. Maybe Enthusiast was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Enthusiast with cpf=" + cpf
        });
      });
};

exports.deleteAll = (req, res) => {
    Enthusiast.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Enthusiasts were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Enthusiasts."
        });
      });
};

