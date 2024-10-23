import { NextResponse } from "next/server";
import crypto from "crypto";

const MERCHANT_UUID = process.env.CRYPTOMUS_MERCHANT_UUID;
const PAYMENT_KEY = process.env.CRYPTOMUS_PAYMENT_KEY;

export async function POST(request: Request) {
  const { quantity, email } = await request.json();

  const orderData = {
    amount: quantity * 10, // Assuming each account costs $10
    currency: "USD",
    order_id: crypto.randomUUID(),
    customer_email: email,
  };

  const payload = JSON.stringify(orderData);
  const sign = crypto
    .createHash("md5")
    .update(Buffer.from(payload).toString("base64") + PAYMENT_KEY)
    .digest("hex");

  try {
    const response = await fetch("https://api.cryptomus.com/v1/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        merchant: MERCHANT_UUID!,
        sign: sign,
      },
      body: payload,
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error creating invoice:", error);
    return NextResponse.json({ error: "Failed to create invoice" }, { status: 500 });
  }
}
