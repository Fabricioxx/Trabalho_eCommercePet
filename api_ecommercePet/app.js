require('./database/mongodb'); // banco de dados
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors'); // cors - permite que uma aplicação acesse outra aplicação

// swagger
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');




// Rotas
var indexRouter = require('./routes/index');
var clientesRouter = require('./routes/clientesRouter');
var categoriaRouter = require('./routes/categoriaRouter');
var produtosRouter = require('./routes/produtosRouter');
var pedidoRouter = require('./routes/pedidoRouter');
var loginRouter = require('./routes/loginRouter');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({credentials: true, origin: true})) //{credentials: true, origin: true} habilita o CORS para todas as origens e credenciais

/// swagger
app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

app.use('/', indexRouter);
app.use('/clientes', clientesRouter);
app.use('/categorias', categoriaRouter);
app.use('/produtos', produtosRouter);
app.use('/pedidos', pedidoRouter);
app.use('/login', loginRouter);
//app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
