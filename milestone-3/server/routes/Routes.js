const express = require('express');
const router = express.Router();

const ProductRoutes = require('./ProductRoutes');
const AdminRoutes = require('./AdminRoutes');

router.use('/products', ProductRoutes);
router.use('/admins', AdminRoutes);

module.exports = router;