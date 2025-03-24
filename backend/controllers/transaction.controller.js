import Company from "../models/company.model.js";
import Transaction from "../models/Transaction.model.js";
import { errorHandler } from "../utils/error.js";

export const RecentTransaction = async (req, res, next) => {
	try {
		const userId = req.user._id;
		const transaction = await Transaction.find({ userId })
			.populate("companyId")
			.sort({ createdAt: -1 });
		res.status(200).send(transaction);
	} catch (error) {
		next(errorHandler(400, error?.message));
	}
};
export const createTransaction = async (req, res, next) => {
	try {
		const userId = req.user._id;
		const { type, companyId, shares } = req.body;
		console.log(req.body);
		if (!type || !companyId || !shares) {
			return next(errorHandler(400, "All fields are required"));
		}
		const company = await Company.findById(companyId);
		if (!company) {
			throw new Error("Company not found!");
		}
		const totalAmount = shares * company.stockPrice;
		const transaction = new Transaction({
			userId,
			type,
			companyId,
			shares,
			pricePerShare: company.stockPrice,
			totalAmount,
		});
		await transaction.save();
		res.status(200).send(transaction);
	} catch (error) {
		next(errorHandler(400, error?.message));
	}
};
