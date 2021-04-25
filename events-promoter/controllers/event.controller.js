const db = require("../models");

const Event = db.events;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    const event = {
      cnpj_promoter: req.body.cnpj_promoter,
      name_event: req.body.name_event,
      description_event: req.body.description_event,
      theme: req.body.theme,
      state: req.body.state,
      city: req.body.city,
      district: req.body.district,
      street: req.body.street,
      number_place: req.body.number_place,
      zipCode: req.body.zipCode,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      site: req.body.site,
      eventDate: req.body.eventDate

    };
  
    Event.create(event)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Event."
        });
      });

};

exports.findAll = (req, res) => {
  
    Event.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Events."
        });
      });

};

exports.findAllByCNPJ = (req, res) => {

  const cnpj_promoter = req.params.cnpj_promoter;

  Event.findAll({ where: { cnpj_promoter: cnpj_promoter } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Events."
      });
    });

};

exports.findOne = (req, res) => {

  const id = req.params.id;

  Event.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Event with id=" + id
      });
    });

};

exports.findAllByNameEvent = (req, res) => {

  const name_event = req.body.name_event;

  var condition = name_event ? { name_event: { [Op.like]: `%${name_event}%` } } : null;

  Event.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Events."
      });
    });
};

exports.findAllByThemeEvent = (req, res) => {

  const theme = req.body.theme;

  var condition = theme ? { theme: { [Op.like]: `%${theme}%` } } : null;

  Event.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Events."
      });
    });
};

exports.findAllByStateEvent = (req, res) => {

  const state = req.body.state;

  var condition = state ? { state: { [Op.like]: `%${state}%` } } : null;

  Event.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Events."
      });
    });
};

exports.findAllByCityEvent = (req, res) => {

  const city = req.body.city;

  var condition = city ? { city: { [Op.like]: `%${city}%` } } : null;

  Event.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Events."
      });
    });
};

exports.findAllByZipCodeEvent = (req, res) => {

  const zipCode = req.body.zipCode;

  var condition = zipCode ? { zipCode: { [Op.like]: `%${zipCode}%` } } : null;

  Event.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Events."
      });
    });
};

// findAllByDateEvent

exports.update = (req, res) => {

    const id = req.params.id;
  
    Event.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Event was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Event with id=${id}. Maybe Event was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Event with id=" + id
        });
      });

};

exports.deleteOne = (req, res) => {

    const id = req.params.id;
  
    Event.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Event was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Event with id=${id}. Maybe Event was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Event with id=" + id
        });
      });

};

exports.deleteAll = (req, res) => {
    Event.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Events were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Events."
        });
      });
      
};


