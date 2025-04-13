import Company from "../models/company.model.js";
import { errorHandler } from "../utils/error.js";

export const registerCompany = async (req, res, next) => {
	const { name, symbol, stockPrice, availableShares, totalShares, logo } =
		req.body;

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
			currentPrice: stockPrice,
			stocks: [{ price: stockPrice, time: Date.now() }],
			availableShares,
			totalShares,
			createdBy: req.user.id,
			logo,
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

export const getCompanies = async (req, res, next) => {
	try {
		const allCompany = await Company.find({});
		if (!allCompany) {
			return next(errorHandler(400, "No company found"));
		}
		return res.status(200).json(allCompany);
	} catch (error) {
		next(errorHandler(500, "Internal server error"));
	}
};

export const getCompany = async (req, res, next) => {
	try {
		const company = await Company.findOne({ _id: req.params.id });
		if (!company) {
			return next(errorHandler(400, "company not found"));
		}
		return res.status(200).json(company);
	} catch (error) {
		next(errorHandler(500, "Internal server error"));
	}
};

export const updateStockPrice = async (req, res, next) => {
	try {
		const { companyId, type, shares } = req.body;
		if (!companyId || !type || !shares) {
			return next(errorHandler(404, "Not found"));
		}
		const company = await Company.findById(companyId);
		// Define price impact factor
		const impactFactor = 0.001; // Adjust this for stronger or weaker impact

		let currStockPrice = company?.currentPrice;

		if (type === "buy") {
			company.availableShares -= shares;
			currStockPrice += shares * impactFactor;
		} else if (type === "sell") {
			company.availableShares += shares;
			currStockPrice -= shares * impactFactor;
		}

		company.stocks.push({ price: currStockPrice, time: Date.now() });

		company.currentPrice =
			company.stocks[company.stocks.length - 1].price.toFixed(4);
		await company.save();
		next();
	} catch (error) {
		next(errorHandler(500, error.message || "Something Went wrong!"));
	}
};
