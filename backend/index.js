import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import companyRoute from "./routes/company.route.js";
import bankRoute from "./routes/bank.route.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
app.use(cookieParser());
app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose
	.connect(process.env.URI)
	.then(() => console.log("mongodb connected successfully!!"))
	.catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/company", companyRoute);
app.use("/api/bank", bankRoute);
app.listen(PORT, () => {
	console.log(`app running at port ${PORT}`);
});

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";
	res.status(statusCode).json({
		success: false,
		statusCode,
		message,
	});
});
