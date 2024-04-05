const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/profile', (req, res) => {
  const userId = req.session.userId;
  User.findById(userId)
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = router;