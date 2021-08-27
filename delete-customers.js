const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

console.log(process.env.STRIPE_SECRET_KEY);

(async () => {
  const { data: customers } = await stripe.customers.list();

  for (const customer of customers) {
    console.log("> Delete ", customer.email);
    await stripe.customers.del(customer.id);
  }

  console.log("> All customers were deleted");
})().then();
