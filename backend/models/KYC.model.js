import mongoose from "mongoose";

const KycSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	fullName: {
		type: String,
		required: true,
	},
	documentType: {
		type: String,
		required: true, // Aadhaar, PAN, etc.
	},
	documentNumber: {
		type: String,
		required: true,
		unique: true,
	},
	status: {
		type: String,
		default: "Pending", // Pending/Verified/Rejected
	},
	submittedAt: {
		type: Date,
		default: Date.now,
	},
	verifiedAt: {
		type: Date,
	},
});

const Kyc = mongoose.model("Kyc", KycSchema);
export default Kyc;
