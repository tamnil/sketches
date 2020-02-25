const app = require('express');

const data = require('../data/data.json');
const config = require('./config/index')
// const port = 8000


//  app.get('/bankGateway/payment', ()=> 'data');

const cbFunc = (port) =>  ( )=> console.log(`Example app listening on port ${port} `)


const init =   (port) =>   {


    app.listen(port);

    // a.listen(port)
     return a
    // app.listen(port,cbFunc)

}
const test = () => console.log('here')

module.exports = {
init,
    test

}



