const express = require('express');
const path = require('path');
const exphs = require('express-handlebars');


//Initializations
const app = express();

//Settings
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));

//funcion con un objeto de configuracion, el objeto tiene propiedades, 
//para saber de que manera se utilizaran la vistas
app.engine('.hbs',exphs({       
    defaultLayout:,
    layoutsDir:,
    partialsDir:,
    extname:
}));

//Middlwares

//Global Variables

//Routes

//Static Files

//Server is listenning
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'))
});