//External Module
const express = require("express");
const storeRouter = express.Router();

//Local Module
const {
  getHomes,
  getBookings,
  getIndex,
  getFavouriteList,
  getHomeDetails,
  postAddToFavourite,
  postRemoveFromFavourite,
} = require("../controllers/storeController");

storeRouter.get("/", getIndex);
storeRouter.get("/homes", getHomes);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/favourites", getFavouriteList);

storeRouter.get("/homes/:homeId", getHomeDetails);
storeRouter.post("/favourites", postAddToFavourite);
storeRouter.post("/favourites/delete/:homeId", postRemoveFromFavourite);

module.exports = storeRouter;
