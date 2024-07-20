const express = require("express");
const app = express();
const db = require("../Connection/conn");

exports.Login = async (req,res) =>{
    console.log(req.body.password)
}