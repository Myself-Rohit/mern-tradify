import express from "express";
import { registerCompany } from "../controllers/company.controller.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/register", verifyToken, registerCompany);

export default router;
