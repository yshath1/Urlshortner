const router = require("express").Router();
const User = require("../models/User");
const Url = require("../models/Url");
const shortId = require('shortid')
//CREATE shorturl
router.post("/", async (req, res) => {
 
  const newUrl = new Url(req.body);
  try {
    const savedUrl = await newUrl.save();
    res.status(200).json(savedUrl);
  } catch (err) {
    res.status(500).json(err);
  }
});


//DELETE URL
router.delete("/:id", async (req, res) => {
  try {
    const url = await Url.findById(req.params.id);
    if (url.username === req.body.username) {
      try {
        await url.delete();
        res.status(200).json("Url has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your url!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Url
router.get("/:id", async (req, res) => {
  try {
    const url = await Url.findById(req.params.id);
    res.status(200).json(url);
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET ALL URLS
router.get("/:shortId", async (req, res) => {

  try {
    const { shortId } = req.params
    console.log(shortId);
    const result = await Url.findOne({ shortId })
    console.log(result);
    
    
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL URLS
router.get("/", async (req, res) => {
  const username = req.query.user;
 
  try {
    let urls;
    if (username) {
      urls = await Url.find({ username });
    
    } else {
      urls = await Url.find();
    }
    res.status(200).json(urls);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
