import express from "express";
import { serviceProxy } from "./proxy.js";

const router = express.Router();

router.use("/users", serviceProxy.users);
router.use("/orders", serviceProxy.orders);
router.use("/payments", serviceProxy.payments);

export default router;
