const express = require('express')
const app = express()
const productos = require('./productos')


// handlebars
const { engine } = require('express-handlebars')
// Servidor
app.listen(8080, () => {
  console.log('El servidor está inicializado en el puerto 8080 http://localhost:8080')
})

// Middleware de Bootstrap, Jquery y assets(imagenes)
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))
app.use('/assets', express.static(__dirname + '/assets'))

// Se configura handlebars
app.engine(
  'handlebars',
  engine({
    layoutsDir: __dirname + '/views',
    partialsDir: __dirname + '/views/partials/'
  })
)
app.set('view engine', 'handlebars')

// Ruta que mostrará el handlebar que contendrá el código html main
app.get('/', (req, res) => {
  res.render("main", {
    layout: "main",
    productos
  })
})