
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

app.get('/',(req, res)=>{
    res.json({
        username:'camilo',
        url:'https://www.youtube.com/watch?v=794Q71KVw1k&ab_channel=Fazt'
    })
})

app.post('/about',(req, res)=>{
    res.send('peticion post recivida')
})

app.put('/contact',(req, res)=>{
    res.send('petcion put recivida')
})

app.delete('/test',(req, res)=>{
    res.send('peticion delete recivida')
})

app.listen(3000,()=>{
    console.log('Server on port 3000');
})
