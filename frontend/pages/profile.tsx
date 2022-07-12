import React from "react";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { withPageAuthRequired, getSession, Session } from "@auth0/nextjs-auth0";

import { OrderStyle } from "~styles/pages/ProfileStyle";

interface ProfileProps {
  user: Session;
  orders: Stripe.PaymentIntent[];
}

const Profile = ({ user, orders }: ProfileProps) => {
  const router = useRouter();

  return (
    user && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div>
          {orders.map((order) => (
            <OrderStyle key={order.id}>
              <h1>Order Number: {order.id}</h1>
              <h2>Amount: {order.amount}</h2>
              <h2>Receipt Email: {user.email}</h2>
            </OrderStyle>
          ))}
        </div>
        <button onClick={() => router.push("/api/auth/logout")}>Logout</button>
      </div>
    )
  );
};

export default Profile;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const STRIPE_SECRET: string = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!;
    const stripe = new Stripe(STRIPE_SECRET, {
      typescript: true,
    } as Stripe.StripeConfig);

    const session = getSession(ctx.req, ctx.res);
    const stripeId: string =
      session?.user[`${process.env.BASE_URL}/stripe_customer_id`];
    const paymentIntents = await stripe?.paymentIntents.list({
      customer: stripeId,
    });

    return { props: { orders: paymentIntents.data } };
  },
});
