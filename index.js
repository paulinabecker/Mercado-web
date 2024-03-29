const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const PORT = 3000;

// Configurar Handlebars como motor de plantillas
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'handlebars');

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Ruta raíz que renderiza la vista principal
app.get('/', (req, res) => {
    const productos = ['banana', 'cebollas', 'lechuga', 'papas', 'pimenton', 'tomate'];
    res.render('dashboard', { productos });
});

// Middleware para Bootstrap y jQuery
app.use('/bootstrap', express.static(`${__dirname}/node_modules/bootstrap/dist`));
app.use('/jquery', express.static(`${__dirname}/node_modules/jquery/dist`));

app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`);
});
