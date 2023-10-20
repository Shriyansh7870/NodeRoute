const {
  bollywood,
  technology,
  food,
  hollywood,
  fitness,
  home,
} = require("../Controller/ControllerRouting");
const catergoryRouter = require("express").Router();
catergoryRouter.get("/Bollywood", bollywood);
catergoryRouter.get("/Technology", technology);
catergoryRouter.get("/Food", food);
catergoryRouter.get("/Hollywood", hollywood);
catergoryRouter.get("/Fitness", fitness);
catergoryRouter.get("/Home", home);
module.exports = catergoryRouter;
