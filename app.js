// Require de Express
const express = require('express');
const app = express();
const path = require('path')

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));


// Ruta Raíz / ➝ Home
app.get('/', function(req, res){
    let file = path.resolve('index.html')
    res.sendFile(file)
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes',function(req, res) {
    let file = path.resolve('heroes.js')
    res.sendFile(file)
});

// Ruta... ¿Pára qué sirve esto?
app.get('*', function(req, res){
	res.status(404).send('404 not found. <br> JEJEJEJEJE esta pagina no exite rey');
});