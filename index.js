const express = require('express');
const app = express();
const port = 3000;

var orders = [];
var bill = 0;
var customers = [];

app.get('/', (request, response) => {
    customers.push(request.query.customer);

    response.send('Hello '+request.query.customer+', Good Day! Welcome to restaurant! What are your orders?');
    console.log('Welcome to Restaurant!');
});

app.get('/orderWater', (request, response) => {
    orders.push('Water');
    bill = bill + 10;
    response.send('You have ordered water, coming up!');
    console.log('Ordered water!');
});

app.get('/orderBurger', (request, response) => {
    orders.push('Burger');
    bill = bill + 30;
    response.send('You have ordered burger, coming up!');
    console.log('Ordered Burger!');
});

app.get('/orderFries', (request, response) => {
    orders.push('Fries');
    bill = bill + 20;
    response.send('You have ordered Fries, coming up!');
    console.log('Ordered Fries!');
});

app.get('/getBill', (request, response) => {
    response.send('Your current bill is '+bill.toFixed(2));
    console.log('Displayed current bill');
});

app.get('/getOrder', (request, response) => {

    response.send(orders);

    console.log('Displayed list of orders.');
});

app.get('/payBill', (request, response) => {
    bill = 0;
    response.send('You have paid your bill.');
    console.log('Paid bill.');
});

app.listen(port, () => {
    console.log('i run the port!'); 
});

