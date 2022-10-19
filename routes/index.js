const express = require("express");
const router = express.Router();
const axios = require("axios");

router.all("/:apiName", (req, res) => {
  console.log(req.params.apiName);
  axios.get("http://localhost:3001/fakeapi").then((response) => {
    console.log("ABCCC");
    res.send(response.data);
  });
});

module.exports = router;
