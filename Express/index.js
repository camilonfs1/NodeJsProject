
//------------------------------------------->>>>SIN EXPRESS
/*const http = require('http');                          //metodo que nos ayuda a crear el servidor

const server = http.createServer((req,res)=>{
    res.status = 200;                               //respuesta
    res.setHeader('Content-Type', 'text/plain');    //header de texto plano   
    res.end('Hello world');
});

server.listen(3000, ()=>{
    console.log('Server on port 3000')
});*/

const express = require('express');
const morgan = require('morgan');
const app = express();

//SETTINGS
app.set('appName','Camilo Express Example')
app.set('port',3000)


//MIDDLEWARES
function logger(req, res,next){ //mideware
    console.log(`Route : ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

app.use(express.json());
app.use(morgan('dev'));

/*app.all('/user',(req, res,next)=>{
    console.log('por aqui paso');
    next();
});*/

//ROUTES
app.get('/user',(req, res)=>{
    res.json({
        username:'camilo',
        url:'https://www.youtube.com/watch?v=794Q71KVw1k&ab_channel=Fazt'
    })
});

app.post('/user/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('peticion post recivida')
});

app.put('/user/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send(`Usuario ${req.params.id} actualizado`)
});

app.delete('/user/:userid',(req, res)=>{
    console.log(req.params);
    res.send(`Usuario ${req.params.userid} eliminado`)
});
app.use(express.static('public'));

app.listen(app.get('port'),()=>{
    console.log(app.get('appName'));
    console.log('Server on port ', app.get('port'));
});