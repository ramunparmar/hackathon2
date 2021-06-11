const express = require("express");
const router = express.Router();
const fs = require("fs");
// const { v4: uuidv4 } = require("uuid");

function loadArtists() {
    return JSON.parse(fs.readFileSync("./data/artists.json"));
  }

router
  .get("/", (req, res) => {
    console.log("this is the artist route")
    const artists = loadArtists();
    res.json(artists);
  })

module.exports = router;