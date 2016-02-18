var express = require("express");

var app = express();

app.get("/",function(req,res){
   res.send("Calculo de edad con express!") 
});

app.get("/edad",function(req, res) {
    var anio = parseInt(req.query.year);
    var dia = parseInt(req.query.day);
    var mes = parseInt(req.query.month);
    
   var fechaNacimiento = new Date(anio,mes,dia);
   var  fechaActual = new Date()
    
   var edad = fechaNacimiento - fechaActual;
    res.send("Su edad es:"+ edad);
});
