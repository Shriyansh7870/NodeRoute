const {
  bollywood,
  technology,
  food,
  hollywood,
  fitness,
  home,
  navigate,
} = require("../Controller/ControllerRouting");
const catergoryRouter = require("express").Router();
catergoryRouter.get("/Bollywood", bollywood);
catergoryRouter.get("/Technology", technology);
catergoryRouter.get("/Food", food);
catergoryRouter.get("/Hollywood", hollywood);
catergoryRouter.get("/Fitness", fitness);
catergoryRouter.get("/Home", home);
catergoryRouter.get("/Navigate", navigate);
module.exports = catergoryRouter;
