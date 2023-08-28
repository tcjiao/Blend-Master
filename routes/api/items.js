const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

router.get('/', itemsCtrl.index);
router.get('/:id', itemsCtrl.show);
router.get('/:itemId/edit-format', itemsCtrl.getItemInEditFormat);

module.exports = router;