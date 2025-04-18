// KycPage.jsx
import React, { useState } from "react";

const KycPage = () => {
	const [kycDetails, setKycDetails] = useState({
		fullName: "",
		documentType: "",
		documentNumber: "",
	});
	const [submissionStatus, setSubmissionStatus] = useState("");

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setKycDetails({ ...kycDetails, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Simulate KYC submission
		console.log("KYC Details Submitted:", kycDetails);
		setSubmissionStatus("Your KYC details have been submitted successfully!");
		setKycDetails({ fullName: "", documentType: "", documentNumber: "" });
	};

	return (
		<div className="min-h-screen bg-gray-900 text-gray-200 p-8">
			<h1 className="text-3xl font-bold mb-6">KYC Verification</h1>
			<div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
				<h2 className="text-xl font-semibold mb-4">Submit Your KYC Details</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block mb-2">Full Name</label>
						<input
							type="text"
							name="fullName"
							value={kycDetails.fullName}
							onChange={handleInputChange}
							className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
							required
						/>
					</div>
					<div>
						<label className="block mb-2">Document Type</label>
						<select
							name="documentType"
							value={kycDetails.documentType}
							onChange={handleInputChange}
							className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
							required
						>
							<option value="" disabled>
								Select Document Type
							</option>
							<option value="Aadhaar">Aadhaar</option>
							<option value="PAN">PAN</option>
							<option value="Passport">Passport</option>
							<option value="Driving License">Driving License</option>
						</select>
					</div>
					<div>
						<label className="block mb-2">Document Number</label>
						<input
							type="text"
							name="documentNumber"
							value={kycDetails.documentNumber}
							onChange={handleInputChange}
							className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
					>
						Submit KYC
					</button>
				</form>
				{submissionStatus && (
					<p className="mt-4 text-green-500 text-center">{submissionStatus}</p>
				)}
			</div>
		</div>
	);
};

export default KycPage;
