// [ https://www.geeksforgeeks.org/how-to-build-a-simple-web-server-with-node-js/ ]

// import express from 'express';      // Add "type":"module"  to package.json file 
const express = require('express');         //  "type":"commonjs"   
app.listen(8080, function(req, res){
    console.log("Server is running...");
});

app.get('/', function( req, res){
    res.send("Hello Word");
})
app.get('/soumik', function( req, res){
    res.send("Hello Soumik");
})
app.get('/soumik/:id', function( req, res){
    let id = req.params.id
    res.send("Hello Soumik "+id);
})