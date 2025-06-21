import { KiteConnect } from "kiteconnect";

const apiKey = "__________________";
const apiSecret = "_____________";
// const requestToken = "____________";

let accessToken = "________________________";

const kc = new KiteConnect({ api_key: apiKey });



export async function placeOrder(tradingsymbol: string, quantity: number, type: "BUY" | "SELL") {
  try {
    kc.setAccessToken(accessToken);
    await kc.placeOrder("regular", {
        exchange: "NSE",
        tradingsymbol,
        transaction_type: type,
        quantity,
        product: "CNC",
        order_type:"MARKET"
    });
  } catch (err) {
    console.error(err);
  }
}



