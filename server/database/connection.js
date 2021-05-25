// imports
const database = require("mongoose");

// connecting to database

database.connect("mongodb://localhost/Stacks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

database.connection
  .on("open", () => {
    console.log("connected to mongoose database");
  })
  .once("error", (error) => {
    console.log(error);
  });
