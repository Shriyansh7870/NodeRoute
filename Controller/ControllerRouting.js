const {
  Bollywood,
  Technology,
  Food,
  Hollywood,
  Fitness,
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
module.exports = { bollywood, technology, food, hollywood, fitness };
