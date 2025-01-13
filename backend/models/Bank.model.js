import mongoose from "mongoose";

const BankAccountSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		accountNumber: {
			type: String,
			default: "defaultAc",
			required: true,
			unique: true,
		},
		bankName: {
			type: String,
			required: true,
		},
		ifscCode: {
			type: String,
			required: true,
		},
		balance: {
			type: Number,
			default: 500,
		},
	},
	{ timestamps: true }
);

const BankAccount = mongoose.model("BankAccount", BankAccountSchema);
export default BankAccount;
