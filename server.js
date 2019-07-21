/* Importar módulos */
const express = require('express');
const bodyParser = require ('body-parser');
const controllers = require('./controllers');
      
const app = express();

/* Configurar body-parser */
app.use(bodyParser.urlencoded({ extended : true }));  
app.use(bodyParser.json());

controllers.init(app);

/* Parametrizar porta de escuta */
const port = 3000;
app.listen(port, function(){
    console.log(`Servidor HTTP está escutando na porta ${port}`);
});
