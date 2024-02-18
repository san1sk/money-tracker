const express = require("express");
// import express from 'express';
const app = express();

app.get('/api/test',(req,res)=>{
    res.json('test ok');
});

app.listen(4000);