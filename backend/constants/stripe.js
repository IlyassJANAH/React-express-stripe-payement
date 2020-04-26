const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_dbao1FCExCxLClhpuTLm5ew1003t4ridDI'
    : 'sk_test_dbao1FCExCxLClhpuTLm5ew1003t4ridDI';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
