module.exports = app => {
    
    const enthusiasts = require("../controllers/enthusiast.controller.js");

    const promoters = require("../controllers/promoter.controller.js");

    const events = require("../controllers/event.controller.js");
  
    var router = require("express").Router();

    // Enthusiasts
  
    router.post("/enthusiasts", enthusiasts.create);
  
    router.get("/enthusiasts", enthusiasts.findAll);

    router.get("/enthusiasts/authenticate", enthusiasts.findAllToAuthenticate);
  
    router.get("/enthusiasts/:cpf", enthusiasts.findOne);
  
    router.put("/enthusiasts/:cpf", enthusiasts.update);
  
    router.delete("/enthusiasts/:cpf", enthusiasts.deleteOne);
  
    router.delete("/enthusiasts", enthusiasts.deleteAll);

    // Promoters

    router.post("/promoters", promoters.create);
  
    router.get("/promoters", promoters.findAll);

    router.get("/promoters/authenticate", promoters.findAllToAuthenticate);
  
    router.get("/promoters/:cnpj", promoters.findOne);
  
    router.put("/promoters/:cnpj", promoters.update);
  
    router.delete("/promoters/:cnpj", promoters.deleteOne);
  
    router.delete("/promoters", promoters.deleteAll);

    // Events

    router.post("/events", events.create);
  
    router.get("/events", events.findAll);
  
    router.get("/events/:id", events.findOne);
  
    router.put("/events/:id", events.update);
  
    router.delete("/events/:id", events.deleteOne);
  
    router.delete("/events", events.deleteAll);
  
    app.use('/api', router);

};



