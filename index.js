const express = require("express");
const catergoryRouter = require("./Routing/CategoryRouting");
const cors = require("cors");
const { Bollywood } = require("./DummyData");
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

// app.get("/Api", (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   const data = Bollywood.find((item) => item.id == id);
//   console.log(data);
// });

// app.get("/Api", (req, res) => {
//   const data = Home.find((item) => item.id == id);
//   console.log(data);
// });
app.use("/Api", catergoryRouter);
app.listen(5000, () => {
  console.log(`Run the port the server-5000`);
});
