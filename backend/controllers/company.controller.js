import Company from "../models/company.model.js";
import { errorHandler } from "../utils/error.js";

export const registerCompany = async (req, res, next) => {
	const { name, symbol, stockPrice, availableShares, totalShares } = req.body;

	if (!name || !symbol || !stockPrice || !availableShares || !totalShares) {
		return next(errorHandler(400, "All fields are required"));
	}

	if (!req.user.isAdmin) {
		return next(errorHandler(400, "You are not allowed to register company"));
	}

	try {
		const companyExist = await Company.findOne({ name });
		if (companyExist) {
			return next(errorHandler(400, "Company is already registered"));
		}
		const newCompany = await Company.create({
			name,
			symbol,
			stockPrice,
			availableShares,
			totalShares,
			createdBy: req.user.id,
		});
		if (newCompany) {
			newCompany.populate("createdBy");
			await newCompany.save();

			return res.status(200).json(newCompany);
		}
	} catch (error) {
		return next(errorHandler(500, "Internal server error"));
	}
};
