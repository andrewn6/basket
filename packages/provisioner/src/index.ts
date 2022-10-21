import * as dotenv from "dotenv";
dotenv.config();

import { sdk } from "./gql/client";

const main = async () => {
  const b = await sdk.getViewer();
  console.log(b.viewer.username);
};

main();
