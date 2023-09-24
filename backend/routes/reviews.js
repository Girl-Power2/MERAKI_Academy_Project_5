const express = require("express");
const {
  addNewReviews,
  getAllReview,
  getReviewByProviderId,
  updateReviewByUserId,
  deleteReviewById,
} = require("../controllers/reviews");

const reviewsRouter = express.Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

reviewsRouter.post(
  "/",
  authentication,
  authorization("CREATE_CATEGORY"),
  addNewReviews
);
reviewsRouter.get("/", authentication, getAllReview);
reviewsRouter.get("/provider/:id", authentication, getReviewByProviderId);
reviewsRouter.put(
  "/user/:id",
  authentication,
  authorization("CREATE_CATEGORY"),
  updateReviewByUserId
);
reviewsRouter.delete(
  "/:id",
  authentication,
  authorization("CREATE_CATEGORY"),
  deleteReviewById
);

module.exports = reviewsRouter;
