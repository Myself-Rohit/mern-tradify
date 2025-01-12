import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePic: {
			type: String,
			required: true,
			default:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiRnzzyrDtkmRzlAvPPbh77E-Mvsk3brlxQ&s",
		},
		isAdmin: {
			type: Boolean,
			default: false, // False for regular users, true for admins
		},
		isKycVerified: {
			type: Boolean,
			default: false,
		},
		walletBalance: {
			type: Number,
			default: 0,
		},
		portfolio: [
			{
				companyId: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Company",
				},
				sharesOwned: {
					type: Number,
					default: 0,
				},
			},
		],
		transactions: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Transaction",
			},
		],
		bank: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "BankAccount",
		},
		kycDetails: {
			fullName: {
				type: String,
			},
			documentType: {
				type: String, // e.g., Aadhaar, PAN
			},
			status: {
				type: String,
				enum: ["Pending", "Verified", "Rejected"],
				default: "Pending",
			},
			submittedAt: {
				type: Date,
			},
			verifiedAt: {
				type: Date,
			},
		},
		createdCompanies: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Company",
			},
		],
	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
