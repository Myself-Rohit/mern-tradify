import express from "express";
import { verifyToken } from "../utils/verifyToken.js";
import {
	createTransaction,
	RecentTransaction,
} from "../controllers/transaction.controller.js";

const router = express.Router();

router.get("/recent", verifyToken, RecentTransaction);
router.post("/create", verifyToken, createTransaction);
export default router;
