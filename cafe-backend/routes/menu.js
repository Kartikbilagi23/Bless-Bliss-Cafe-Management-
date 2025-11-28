const express = require('express');
const router = express.Router();
const MenuItem = require('../models/Menuitems');

router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
