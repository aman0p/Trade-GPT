import { KiteConnect } from "kiteconnect";

const apiKey = "jxae7961iobc8a4u";
const apiSecret = "8g0c6jp93f32cbgmiwg0dmfsgx5ovupd";
// const requestToken = "vFgXX24mySqfEHZHGibIfblhrJHx7Rv2";

let accessToken = "4Ta1xBKABu3rMPWYbtS9simnogeEsPlE";

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



