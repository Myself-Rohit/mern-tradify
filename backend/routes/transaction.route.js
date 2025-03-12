import express from "express";
import { verifyToken } from "../utils/verifyToken.js";
import {
	createTransaction,
	RecentTransaction,
} from "../controllers/transaction.controller.js";

const router = express.Router();

router.get("/transaction/:userId", verifyToken, RecentTransaction);
router.get("/transaction/:userId", verifyToken, createTransaction);
export default router;
