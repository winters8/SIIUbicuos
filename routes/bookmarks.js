var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();
var debug = require("debug")("moviesApp:server");


//Models
var Bookmark = require("../models/Bookmark.js");
var db = mongoose.connection;

/* GET bookmarks listing from an user by user email. */
router.get("/:email", function (req, res) {
  Bookmark.find({ email: req.params.email })
    .sort("-addeddate")
    .populate("movie")
    .exec(function (err, bookmarks) {
      if (err) res.status(500).send(err);
      else res.status(200).json(bookmarks);
    });
});

module.exports = router;