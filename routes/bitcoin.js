const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  let data1 = {};
  axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "a5e95b5b-60f7-4c4d-bf02-e42a431c8c51",
        },
      }
    )
    .then((data) => {
      console.log("ssending");
      if (data.status.toString() === "200") {
        res.status(200).json(data.data);
      } else if (data.status.toString() === "429") {
        res.status(429).json({ limit: "exceeded" });
      } else {
        res.status(500).json({ status: "internal server error" });
      }
    })
    .catch((err) => res.send(err));
});

module.exports = router;
