import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { errorHandler } from "./error.js";

export const verifyToken = async (req, res, next) => {
	try {
		const token = req.cookies.token;
		if (!token) {
			return next(errorHandler(401, "Unauthorized - No Token Provided"));
		}
		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		if (!decoded) {
			return next(errorHandler(401, "Unauthorized - Invalid Token"));
		}
		const user = await User.findById(decoded.id).select("-password");

		if (!user) {
			return next(errorHandler(404, "User not found"));
		}
		req.user = user;
		next();
	} catch (error) {
		return next(errorHandler(500, "Internal server error"));
	}
};
