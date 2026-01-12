import express from "express";
import router from "./router.js";
import { auth } from "./middleware/auth.js";
import { logger } from "./middleware/logger.js";
import { timeout } from "./middleware/timeout.js";

const app = express();

app.use(logger);
app.use(auth);
app.use(timeout(3000));
app.use("/api", router);

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});
