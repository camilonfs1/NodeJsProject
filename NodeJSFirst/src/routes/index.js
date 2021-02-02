const express =require('express');
const router = express.Router();

// Routes examples
/*router.get('/',(req,res)=>{
    //res.sendFile('./Views/index.html');
    //console.log(__dirname+'/Views/index.html'); //da la direccion del archivo que se esta ejecutando
    //res.sendFile(path.join(__dirname,'views/index.html')); 
    res.render('index',{tittle: 'First Webside'})
    //uso de path
});*/

//main
router.get('/',(req,res)=>{
    res.render('index',{tittle: 'Website Camilo'})
});

//contact
router.get('/contact',(req,res)=>{
    res.render('contact',{tittle: 'Pagina de contactos'})
});



module.exports = router;