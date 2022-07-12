import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Stripe from "stripe";

import type { GetServerSideProps } from "next";

import shiba from "~public/shiba.png";

import formatMoney from "lib/formatMoney";

import {
  SuccessWrapperStyle,
  SuccessCardStyle,
  SuccessInfoWrapper,
  SuccessAddressStyle,
  SuccessOrderInfo,
} from "~styles/pages/SuccessStyle";

import { CardAnimation } from "~animations/pages/SuccessAnimation";

interface SuccessProps {
  order: Stripe.Response<Stripe.Checkout.Session>;
}

const Success = ({ order }: SuccessProps) => {
  const router = useRouter();

  return (
    <SuccessWrapperStyle>
      <SuccessCardStyle {...CardAnimation}>
        <h1>Thank you for your order</h1>
        <h2>A confirmation email has been sent to</h2>
        <h2>{order.customer_details?.email}</h2>
        <SuccessInfoWrapper>
          <SuccessAddressStyle>
            <h3>Address</h3>
            {order.customer_details?.address &&
              Object.entries(order.customer_details.address).map(
                ([key, value]: [string, string]) => {
                  //Transform casing and spacing of keys
                  let transformKey = key.replace("_", " ").split(" ");
                  key = transformKey
                    .map((k) => {
                      return k[0].toUpperCase() + k.substring(1);
                    })
                    .join(" ");

                  return (
                    <p key={key}>
                      {key} : {value}
                    </p>
                  );
                }
              )}
          </SuccessAddressStyle>
          <SuccessOrderInfo>
            <h3>Products</h3>
            {order.line_items?.data.map((item) => (
              <div key={item.id}>
                <p>Product: {item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {formatMoney(item.price?.unit_amount ?? 0)}</p>
              </div>
            ))}
          </SuccessOrderInfo>
        </SuccessInfoWrapper>
        <button onClick={() => router.push("/")}>Continue Shopping</button>
        <Image src={shiba} alt="shiba-inu" />
      </SuccessCardStyle>
    </SuccessWrapperStyle>
  );
};

export const getServerSideProps: GetServerSideProps = async (params) => {
  const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!}`, {
    typescript: true,
  } as Stripe.StripeConfig);

  const query: string = params.query.session_id as string;

  const order = await stripe.checkout.sessions.retrieve(query, {
    expand: ["line_items"],
  });

  return { props: { order } };
};

export default Success;
