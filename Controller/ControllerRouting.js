const {
  Bollywood,
  Technology,
  Food,
  Hollywood,
  Fitness,
  Home,
  Navigate,
} = require("../DummyData");
const bollywood = (req, res) => {
  res.send(Bollywood);
};
const technology = (req, res) => {
  res.send(Technology);
};
const food = (req, res) => {
  res.send(Food);
};
const fitness = (req, res) => {
  res.send(Fitness);
};
const hollywood = (req, res) => {
  res.send(Hollywood);
};
const home = (req, res) => {
  res.send(Home);
};
const navigate = (req, res) => {
  res.send(Navigate);
};
module.exports = {
  bollywood,
  technology,
  food,
  hollywood,
  fitness,
  home,
  navigate,
};
