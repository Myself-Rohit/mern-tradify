import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		symbol: {
			type: String,
			required: true,
			unique: true,
			uppercase: true, // Stock ticker symbol (e.g., AAPL, MSFT)
		},
		stockPrice: {
			type: Number,
			required: true,
			min: 0, // Ensures stock price cannot be negative
		},
		availableShares: {
			type: Number,
			required: true,
			min: 0, // Ensures no negative share count
		},
		totalShares: {
			type: Number,
			required: true,
			min: 0,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ timestamps: true }
);

const Company = mongoose.model("Company", CompanySchema);
export default Company;
