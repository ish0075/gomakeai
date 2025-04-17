// Either remove unused imports:
// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// OR use them properly:
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

export const api = onRequest((req, res) => {
  logger.info("Logging request");
  res.send("Working response");
});
