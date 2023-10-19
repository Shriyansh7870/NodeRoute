const express = require("express");
const catergoryRouter = require("./Routing/CategoryRouting");
const cors = require("cors");
const app = express();

const middleware1 = (req, res, next) => {
  console.log("miidle run first");
  next();
};
app.use(middleware1);
app.use(cors());
app.get("/Api", (req, res) => {
  console.log("home page");
  res.send("Api is running fine");
});
app.use("/Api", catergoryRouter);
app.listen(5000, () => {
  console.log(`Run the port the server-5000`);
});
