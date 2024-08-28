const express = require("express");
require("dotenv").config();
const employeeRouter = require("./routes/employees.js");
const sequelize = require("./config/database.js");
const app = express();
const port = process.env.APP_PORT;

const server = app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
const handleExit = async () => {
  console.log(`\nClosing server...`);
  server.close(async () => {
    try {
      await sequelize.close();
      console.log("Database connection closed");
    } catch (e) {
      console.error(`Error closing database: ${e.message}`);
    }
    console.log("Server closed");
    process.exit(0); // Exit the process with success code
  });
};

app.use("/employees", employeeRouter);

process.on("SIGINT", handleExit);
