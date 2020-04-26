const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
    ? 'pk_test_P2n3jBWaoqDztlijrQ4Mk87D00vk8ZERTt'
    : 'pk_test_P2n3jBWaoqDztlijrQ4Mk87D00vk8ZERTt';

export default  STRIPE_PUBLISHABLE;