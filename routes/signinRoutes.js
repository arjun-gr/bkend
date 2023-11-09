const express = require('express');
const signInController = require('../controller/signInController');
const routes = express.Router();

routes.get("/", signInController.signInController);
routes.post("/", signInController.signInPostController);
routes.get("/diary",signInController.homeController)
routes.get("/logout", signInController.logoutController);

module.exports = routes; 