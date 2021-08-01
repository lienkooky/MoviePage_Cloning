const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite');

//=================================
//             Favorite
//=================================

router.post('/favoriteNumber', (req, res) => {
  //mongoDB에서 favorite 숫자 가져오기
  Favorite.find({ movieId: req.body.movieId }).exec((err, info) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, favoriteNumber: info.length });
  });
});

router.post('/favorited', (req, res) => {
  Favorite.find({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, info) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, favoriteNumber: info.length });
  });
});

module.exports = router;
