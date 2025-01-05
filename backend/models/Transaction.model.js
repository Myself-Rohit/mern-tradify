import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		type: {
			type: String,
			enum: ["buy", "sell"],
			required: true,
		},
		companyId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Company",
			required: true,
		},
		shares: {
			type: Number,
			required: true,
		},
		pricePerShare: {
			type: Number,
			required: true,
		},
		totalAmount: {
			type: Number,
			required: true,
		},
		date: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
