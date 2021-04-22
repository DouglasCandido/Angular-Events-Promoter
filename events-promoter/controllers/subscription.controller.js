const db = require("../models");

const Subscription = db.subscriptions;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    const subscription = {

      id_event: req.body.id_event,
      cpf_enthusiast: req.body.cpf_enthusiast

    };
  
    Subscription.create(subscription)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Subscription."
        });
      });

};

exports.findAll = (req, res) => {
  
    Subscription.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Subscriptions."
        });
      });

};

exports.findAllByCPF = (req, res) => {

  const cpf_enthusiast = req.params.cpf_enthusiast;

  Subscription.findAll({ where: { cpf_enthusiast: cpf_enthusiast } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Subscriptions."
      });
    });

};

exports.findOne = (req, res) => {

  const id = req.params.id;

  Subscription.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Subscription with id=" + id
      });
    });

};

exports.deleteOne = (req, res) => {

    const id = req.params.id;
  
    Subscription.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Subscription was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Subscription with id=${id}. Maybe Subscription was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Subscription with id=" + id
        });
      });

};

exports.deleteAll = (req, res) => {
    Subscription.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Subscriptions were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Subscriptions."
        });
      });
      
};


