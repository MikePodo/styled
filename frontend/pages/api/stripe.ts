import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

import { ProductType } from "~types/ProductsType";

type CartProductType = ProductType["attributes"] & { qty: number };

const STRIPE_SECRET: string = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!;
const stripe = new Stripe(STRIPE_SECRET, {} as Stripe.StripeConfig);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["US", "CA", "GB", "RO", "DE", "IN"],
        },
        allow_promotion_codes: true,
        shipping_options: [
          { shipping_rate: "shr_1LGEz1HewnbUxex8wIAvFjpw" },
          { shipping_rate: "shr_1LGF76HewnbUxex8vjRHzwfc" },
        ],
        line_items: req.body.map((item: CartProductType) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
                images: [item.image.data.attributes.formats.thumbnail.url],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.qty,
          };
        }),
        //Bring user to success or fail page
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancelled`,
      });
      res.status(200).json(session);
    } catch (e: any) {
      res.status(e.statusCode ?? 500).json(e.message);
    }
  }
}
