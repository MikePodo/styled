import React from "react";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { withPageAuthRequired, getSession, Session } from "@auth0/nextjs-auth0";

import formatMoney from "~lib/formatMoney";

import { OrderStyle, LogoutButtonStyle } from "~styles/pages/ProfileStyle";

import PageHead from "~components/PageHead";

interface ProfileProps {
  user: Session;
  orders: Stripe.PaymentIntent[];
}

const Profile = ({ user, orders, BASE_URL }: ProfileProps) => {
  console.log("BASE_URL", BASE_URL);
  const router = useRouter();

  return (
    user && (
      <div>
        <PageHead title="Profile" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div>
          {orders.map((order) => (
            <OrderStyle key={order.id}>
              <h1>Order Number: {order.id}</h1>
              <h2>Amount: {formatMoney(order.amount)}</h2>
              <h2>Receipt Email: {user.email}</h2>
            </OrderStyle>
          ))}
        </div>
        <LogoutButtonStyle onClick={() => router.push("/api/auth/logout")}>
          Logout
        </LogoutButtonStyle>
      </div>
    )
  );
};

export default Profile;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const STRIPE_SECRET: string = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!;
    const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL!;
    const stripe = new Stripe(STRIPE_SECRET, {
      typescript: true,
    } as Stripe.StripeConfig);

    const session = getSession(ctx.req, ctx.res);

    const stripeId: string = session?.user[`${BASE_URL}/stripe_customer_id`];
    const paymentIntents = await stripe?.paymentIntents.list({
      customer: stripeId,
    });

    return { props: { orders: paymentIntents.data, BASE_URL } };
  },
});
