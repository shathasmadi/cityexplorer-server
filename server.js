const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT;

const indexController = require('./Controllers/index.controller');
const dataController = require('./Controllers/data.controller');
const movieController = require('./Controllers/movies.controller');

app.use(cors()) // after you initialize your express app instance
// a server endpoint 
app.get('/',indexController) // our endpoint name
    
app.get('/data',dataController) // our endpoint name
   
  
app.get('/movies',movieController)
 


app.listen(port) // kick start the express server to work





