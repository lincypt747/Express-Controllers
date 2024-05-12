const express = require ('express');
//Requiring middleware
const cors = require('cors');
const logger = require('morgan');
const catsRouter = require('./routes/cats');
const dogsRouter = require('./routes/dogs');

const PORT = process.env.PORT || 3000;
const app = express();

//MIDDLEWARE PIPELINE
//using middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

//Routes will go here
app.get('/', function(req,res) {
    res.json({msg: 'Server is running'});
})

app.use('/cats', catsRouter);

app.use('/dogs', dogsRouter);


app.listen(PORT, function() {
    console.log(`Server is running in ${PORT}`);
})