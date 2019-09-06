

/*const mongoose = require('mongoose');
const URI = ('mongodb://localhost/mean-crud',  { useNewUrlParser: true });


module.exports = mongoose;*/

const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/mean-crud', { useNewUrlParser: true });


//on connection
mongoose.connection.on('connected',() => {
    console.log('connected to database');
});

//err
mongoose.connection.on('error',(err) => {
    if(err)
    {
        console.log(' error in data base connection'+err);
     }
    console.log('connected to database'); 
});




module.exports=mongoose; 