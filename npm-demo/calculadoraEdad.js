var express = require("express");

var app = express();

app.get("/",function(req,res){
   res.send("Calculo de edad con express!") 
});

app.get("/edad",function(req, res) {
    var anio = parseInt(req.query.year);
    console.log(anio);
    var dia = parseInt(req.query.day);
    console.log(dia);
    var mes = parseInt(req.query.month)-1;
    console.log(mes);
    
   //var fechaNacimiento = new Date(anio,mes,dia);
   //console.log(fechaNacimiento);
   var  fechaActual = new Date();
   var anio_actual = fechaActual.getFullYear();
   var mes_actual = fechaActual.getMonth();
   console.log(mes_actual);
   var dia_actual = fechaActual.getDate();
   console.log("dia"+dia_actual);
   
   var edad = anio_actual - anio;
   if(mes_actual < mes){
       console.log("Entro");
       edad--;
   }else if(mes_actual == mes && dia > dia_actual){
       console.log("Entro en 2");
       edad--;
   }
   console.log(fechaActual);
    
  // var diasTranscurridos =   fechaActual - fechaNacimiento;
   //console.log(diasTranscurridos);
    res.send("Su edad es:"+ edad);
});
app.listen(8080);