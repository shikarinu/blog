import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "reader",
  apiKey: process.env.API_KEY,
});