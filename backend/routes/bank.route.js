import express from "express";
import {
	createAccount,
	getAccountById,
} from "../controllers/bank.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/create/:userId", verifyToken, createAccount);
router.get("/getAccountDetail", verifyToken, getAccountById);

export default router;
