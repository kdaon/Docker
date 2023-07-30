const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: '172.17.0.2', // Checar o ip do container mysql caso de algum problema
    user: 'root',
    password:'1234',
    database:'umBanco',
    insecureAuth : true
});
connection.connect();

app.get('/products', function(req, res) {
    connection.query('select * from products', function (error, results){
        if (error){
            throw error
        };
        res.send(results.map(item => ({ name: item.name, price: item.price})));
    })
});

app.listen(9001, '0.0.0.0', function(){
    console.log('Ouvindo a porta 9001');
})