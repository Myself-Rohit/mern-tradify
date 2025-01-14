import BankAccount from "../models/Bank.model.js";
import { errorHandler } from "../utils/error.js";
export const createAccount = async (req, res, next) => {
	try {
		const { bankName } = req.body;
		const { userId } = req.params;
		if (!bankName) {
			return next(errorHandler(400, "bank name required"));
		}

		if (userId != req.user._id) {
			return next(errorHandler(400, "Unauthorized User"));
		}
		const AccountExist = await BankAccount.findOne({ userId });
		if (AccountExist) {
			return next(errorHandler(400, "Already have account"));
		}
		let ifscCode = "";
		switch (bankName) {
			case "SBI":
				ifscCode = "SBIN0001234";
				break;
			case "HDFC":
				ifscCode = "HDFC0006789";
				break;
			default:
				next(errorHandler(400, "Invalid Bank name"));
		}

		const lastAccount = await BankAccount.findOne().sort({
			accountNumber: -1,
		});
		const accountNumber = lastAccount
			? Number(lastAccount.accountNumber) + 1
			: 100000000001;

		const newAccount = await BankAccount.create({
			userId,
			bankName,
			ifscCode,
			accountNumber,
		});

		if (newAccount) {
			await newAccount.save();
			return res.status(201).json(newAccount);
		}
	} catch (error) {
		next(errorHandler(500, error));
	}
};

export const getAccountById = async (req, res, next) => {
	try {
		const bankAccount = await BankAccount.findOne({ userId: req.user._id });
		if (!bankAccount) {
			return next(errorHandler(400, "bankAccount not found"));
		}
		return res.status(200).json(bankAccount);
	} catch (error) {
		next(errorHandler(500, "Internal server error"));
	}
};
