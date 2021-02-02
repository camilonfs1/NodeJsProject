const express = require('express');                 //llamado de modulo
const app =express();                               //ejecutando el modulo, app es el servidor
const path = require('path');                       //trabajo de directorios

//  Settings
app.set('port',8080);                               //variable en toda la aplicacion
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs');                      //motor de plantilla


// Routes
app.get('/',(req,res)=>{
    //res.sendFile('./Views/index.html');
    //console.log(__dirname+'/Views/index.html'); //da la direccion del archivo que se esta ejecutando
    //res.sendFile(path.join(__dirname,'views/index.html')); 
    res.render('index')
    //uso de path
});


// Listening the server
app.listen(app.get('port'), ()=>{
    console.log('server in port', app.get('port')); //mensaje inicial por consola
});


