import Transaction from "../models/Transaction.model";
import { errorHandler } from "../utils/error";

export const RecentTransaction = async (req, res, next) => {
	try {
		const { userId } = req.params;
		const transaction = await Transaction.find({ userId });
		res.status(200).send(transaction);
	} catch (error) {
		next(errorHandler(400, error?.message));
	}
};
export const createTransaction = async (req, res, next) => {
	try {
		const { userId } = req.user._id;
		const transaction = new Transaction({
			userId,
			type,
			companyId,
			shares,
		});
		res.status(200).send(transaction);
	} catch (error) {
		next(errorHandler(400, error?.message));
	}
};
