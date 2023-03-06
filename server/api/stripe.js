const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51MhZmKE8zFmeoXQYEoTxuO54sSmhyLrqKmbLhyDXpy3AZrKwHLSbzOiTpA8lyykYH2ZQ3GyGSqTWuIFQ6inhSBKZ00ltZQ8MxN"
);


router.post("/", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log(stripeErr);
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
