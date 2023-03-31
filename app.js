const express = require('express');
const app = express();

app.get('/makers/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const nombreCapitalizado = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    res.send(`<h1>Hola ${nombreCapitalizado}!</h1>`);
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});