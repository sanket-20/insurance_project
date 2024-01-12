const express = require('express');
require('dotenv').config();
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const client = require('./config/pg-config');



// client.connect()
// .then(() => {
//     console.log('Connected to the database');
//     // Perform database operations here
// })
// .catch((error) => {
//     console.error('Error connecting to the database:', error.message);
// })
// .finally(() => {
//     // Optionally close the connection after performing operations
//     client.end();
// });


//routing

app.post('/create_user/', function (req, res) {
    var file = require(__dirname + "/src/user/create-user.js");
    file.main(req, res, client);
});

app.put('/update_user/', function (req, res) {
    var file = require(__dirname + "/src/user/update-user.js");
    file.main(req, res, client);
});

app.delete('/delete_user/', function (req, res) {
    var file = require(__dirname + "/src/user/delete-user.js");
    file.main(req, res, client);
});

app.get('/read_user/', function (req, res) {
    var file = require(__dirname + "/src/user/read-user.js");
    file.main(req, res, client);
});

app.get('/user_list/', function (req, res) {
    var file = require(__dirname + "/src/user/user-list.js");
    file.main(req, res, client);
});



//server
app.listen(5521, function () {
    console.log("SErver is running...");
});