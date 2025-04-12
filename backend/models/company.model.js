import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
	{
		logo: {
			type: String,
			required: true,
			default:
				"https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
		},
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
			type: [Number],
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
