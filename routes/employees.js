const express = require("express");
const employeeRouter = express.Router();
const db = require("../models");

employeeRouter.get("/", (req, res) => {
  db.Employees.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = employeeRouter;
