const db = require("../models");

const Promoter = db.promoters;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    const promoter = {
      name_promoter: req.body.name_promoter,
      cnpj: req.body.cnpj,
      sex: req.body.sex,
      birthDate: req.body.birthDate,
      username: req.body.username,
      password_promoter: req.body.password_promoter,
      contactEmail: req.body.contactEmail,
      contactPhone: req.body.contactPhone,
      state: req.body.state,
      city: req.body.city,
      district: req.body.district,
      street: req.body.street,
      number_place: req.body.number_place,
      zipCode: req.body.zipCode,
      site: req.body.site,
    };
  
    Promoter.create(promoter)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Promoter."
        });
      });

};

exports.findAll = (req, res) => {
  
    Promoter.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Promoters."
        });
      });

};

exports.findAllToAuthenticate = (req, res) => {
  
  Promoter.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Promoters."
      });
    });

};

exports.findOne = (req, res) => {

    const cnpj = req.params.cnpj;
  
    Promoter.findByPk(cnpj)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Promoter with cnpj=" + cnpj
        });
      });

};

exports.update = (req, res) => {

    const cnpj = req.params.cnpj;
  
    Promoter.update(req.body, {
      where: { cnpj: cnpj }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Promoter was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Promoter with cnpj=${cnpj}. Maybe Promoter was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Promoter with cnpj=" + cnpj
        });
      });

};

exports.deleteOne = (req, res) => {

    const cnpj = req.params.cnpj;
  
    Promoter.destroy({
      where: { cnpj: cnpj }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Promoter was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Promoter with cnpj=${cnpj}. Maybe Promoter was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Promoter with cnpj=" + cnpj
        });
      });

};

exports.deleteAll = (req, res) => {
    Promoter.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Promoters were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Promoters."
        });
      });
      
};


