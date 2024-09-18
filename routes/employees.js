const express = require("express");
const employeeRouter = express.Router();
const db = require("../models");

employeeRouter.get("/", (req, res) => {
  db.Employees.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send('Error fetching data from db \n' + err);
    });
});

module.exports = employeeRouter;
