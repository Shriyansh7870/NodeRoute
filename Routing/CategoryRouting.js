const {
  bollywood,
  technology,
  food,
  hollywood,
  fitness,
} = require("../Controller/ControllerRouting");
const catergoryRouter = require("express").Router();
catergoryRouter.get("/Bollywood", bollywood);
catergoryRouter.get("/Technology", technology);
catergoryRouter.get("/Food", food);
catergoryRouter.get("/Hollywood", hollywood);
catergoryRouter.get("/Fitness", fitness);
module.exports = catergoryRouter;
