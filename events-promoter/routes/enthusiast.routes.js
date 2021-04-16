module.exports = app => {
    
    const enthusiasts = require("../controllers/enthusiast.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", enthusiasts.create);
  
    router.get("/", enthusiasts.findAll);
  
    router.get("/:cpf", enthusiasts.findOne);
  
    router.put("/:cpf", enthusiasts.update);
  
    router.delete("/:cpf", enthusiasts.deleteOne);
  
    router.delete("/", enthusiasts.deleteAll);
  
    app.use('/api/enthusiasts', router);

};

