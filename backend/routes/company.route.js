import express from "express";
import {
	registerCompany,
	getCompanies,
	getCompany,
	updateStockPrice,
} from "../controllers/company.controller.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/register", verifyToken, registerCompany);
router.get("/all", verifyToken, getCompanies);
router.get("/:id", verifyToken, getCompany);
router.put("/update", verifyToken, updateStockPrice);

export default router;
