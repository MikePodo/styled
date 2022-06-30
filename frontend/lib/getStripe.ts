import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripe: Promise<Stripe | null>;

const getStripe = () => {
  if (!stripe) {
    const STRIPE_PUBLISHABLE: string =
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
    stripe = loadStripe(STRIPE_PUBLISHABLE);
  }
  return stripe;
};

export default getStripe;
