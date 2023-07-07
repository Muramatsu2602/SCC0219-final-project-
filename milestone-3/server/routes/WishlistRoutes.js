const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middleware/AuthMiddleware');
const WishlistController = require('../controllers/wishlist.controller');

router.get('/:userId', async function (request, response, next) {
  try {
    const { userId } = request.params;

    const wishlistItems = await WishlistController.getWishlistByUserId(userId);

    return response.status(200).json(wishlistItems);
  } catch (error) {
    next(error);
  }
});

router.post('/', AuthMiddleware.isAuthenticated, async function (request, response, next) {
  try {
    const { userId, productId } = request.body;

    await WishlistController.addToWishlist(userId, productId);

    return response.status(200).end();
  } catch (error) {
    next(error);
  }
});

router.delete('/:userId/:productId', AuthMiddleware.isAuthenticated, async function (request, response, next) {
  try {
    const { userId, productId } = request.params;

    await WishlistController.removeFromWishlist(userId, productId);

    return response.status(200).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;


