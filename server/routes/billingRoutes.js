// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:
const token = request.body.stripeToken; // Using Express

(async () => {
  const charge = await stripe.charges.create({
    amount: 999,
    currency: "usd",
    description: "Example charge",
    source: token
  });
})();

module.exports = app => {
  app.post("/api/stripe", (req, res) => {});
};
