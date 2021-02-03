
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
const app = express();

app.use(express.json());

app.all('/user',(req, res,next)=>{
    console.log('por aqui paso');
    next();
});

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

app.listen(3000,()=>{
    console.log('Server on port 3000')
});