const express = require('express');
const passport = require('passport');
const router = express.Router();

require('../services/passport');

router.get('/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/plus.login']
}));

router.get('/google/callback', passport.authenticate('google', {
  failureRedirect: '/'
}), (req, res) => {
  res.redirect('/');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/validate', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});

module.exports = router;
