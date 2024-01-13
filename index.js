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

// user api
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

app.get('/read_user/:userId', function (req, res) {
    var file = require(__dirname + "/src/user/read-user.js");
    file.main(req, res, client);
});

app.get('/user_list/', function (req, res) {
    var file = require(__dirname + "/src/user/user-list.js");
    file.main(req, res, client);
});


// client api
app.post('/create_client/', function (req, res) {
    var file = require(__dirname + "/src/client/create-client.js");
    file.main(req, res, client);
});

app.put('/update_client/', function (req, res) {
    var file = require(__dirname + "/src/client/update-client.js");
    file.main(req, res, client);
});

app.delete('/delete_client/', function (req, res) {
    var file = require(__dirname + "/src/client/delete-client.js");
    file.main(req, res, client);
});

app.get('/read_client/:clientId', function (req, res) {
    var file = require(__dirname + "/src/client/read-client.js");
    file.main(req, res, client);
});

app.get('/client_list/', function (req, res) {
    var file = require(__dirname + "/src/client/client-list.js");
    file.main(req, res, client);
});


// distributor api
app.post('/create_distributor/', function (req, res) {
    var file = require(__dirname + "/src/distributor/create-distributor.js");
    file.main(req, res, client);
});

app.put('/update_distributor/', function (req, res) {
    var file = require(__dirname + "/src/distributor/update-distributor.js");
    file.main(req, res, client);
});

app.delete('/delete_distributor/', function (req, res) {
    var file = require(__dirname + "/src/distributor/delete-distributor.js");
    file.main(req, res, client);
});

app.get('/read_distributor/:distributorId', function (req, res) {
    var file = require(__dirname + "/src/distributor/read-distributor.js");
    file.main(req, res, client);
});

app.get('/distributor_list/', function (req, res) {
    var file = require(__dirname + "/src/distributor/distributor-list.js");
    file.main(req, res, client);
});


// customer api
app.post('/create_customer/', function (req, res) {
    var file = require(__dirname + "/src/customer/create-customer.js");
    file.main(req, res, client);
});

app.put('/update_customer/', function (req, res) {
    var file = require(__dirname + "/src/customer/update-customer.js");
    file.main(req, res, client);
});

app.delete('/delete_customer/', function (req, res) {
    var file = require(__dirname + "/src/customer/delete-customer.js");
    file.main(req, res, client);
});

app.get('/read_customer/:customerId', function (req, res) {
    var file = require(__dirname + "/src/customer/read-customer.js");
    file.main(req, res, client);
});

app.get('/customer_list/', function (req, res) {
    var file = require(__dirname + "/src/customer/customer-list.js");
    file.main(req, res, client);
});




// operator api
app.post('/create_operator/', function (req, res) {
    var file = require(__dirname + "/src/operator/create-operator.js");
    file.main(req, res, client);
});

app.put('/update_operator/', function (req, res) {
    var file = require(__dirname + "/src/operator/update-operator.js");
    file.main(req, res, client);
});

app.delete('/delete_operator/', function (req, res) {
    var file = require(__dirname + "/src/customer/delete-operator.js");
    file.main(req, res, client);
});

app.get('/read_operator/:operatorId', function (req, res) {
    var file = require(__dirname + "/src/operator/read-operator.js");
    file.main(req, res, client);
});

app.get('/operator_list/', function (req, res) {
    var file = require(__dirname + "/src/operator/operator-list.js");
    file.main(req, res, client);
});


//server
app.listen(5521, function () {
    console.log("SErver is running...");
});