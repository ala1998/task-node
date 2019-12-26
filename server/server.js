const express = require('express');
const routes = require('./api/routes')
var cors = require('cors')
const app = express();
const config = require('./config')
xmlparser = require('express-xml-bodyparser');
var easyxml = require('easyxml');

app.use(cors()) 
app.use(express.json());
//app.use(xmlparser());

/*easyxml.configure({
  singularizeChildren: true,
  underscoreAttributes: true,
  rootElement: 'response',
  dateFormat: 'ISO',
  indent: 2,
  manifest: true
});*/

app.use('/api/', routes);

app.listen(config.server.port, () => {
    console.log(`Server is running on port ${config.server.port}`);
});
