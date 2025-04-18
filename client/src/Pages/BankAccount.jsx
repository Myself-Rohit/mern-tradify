import React, { useEffect, useState } from "react";
import useCreateBankAccount from "../hooks/useCreateBankAccount.js";
import { useAuthContext } from "../context/authContext";
import useBankDetails from "../hooks/useGetBankDetails.js";
import useBankAccount from "../zustand/useBankAccount.js";

const BankAccountPage = () => {
	const [bankName, setBankName] = useState("");
	const { authUser } = useAuthContext();

	const { accountDetails } = useBankAccount();
	const { createBankAccount } = useCreateBankAccount();
	const { loading, bankDetails } = useBankDetails();

	useEffect(() => {
		bankDetails();
	}, []);

	const banks = ["SBI", "HDFC"];
	const handleSubmit = (e) => {
		e.preventDefault();
		createBankAccount(bankName, authUser._id);
	};

	return (
		<div className="min-h-screen bg-gray-900 p-6">
			<div className="max-w-xl mx-auto bg-gray-800 shadow-md rounded-lg p-6">
				{!accountDetails ? (
					<>
						<h1 className="text-2xl font-bold mb-6">Create Bank Account</h1>
						<form onSubmit={handleSubmit} className="space-y-4">
							{/* Select Bank */}
							<div>
								<label
									htmlFor="bankName"
									className="block text-gray-700 font-medium mb-2"
								>
									Select Bank
								</label>
								<select
									id="bankName"
									value={bankName}
									onChange={(e) => setBankName(e.target.value)}
									className="w-full px-4 py-2 border border-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
									required
								>
									<option value="" disabled>
										Choose a bank
									</option>
									{banks.map((bank) => (
										<option key={bank} value={bank}>
											{bank}
										</option>
									))}
								</select>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
							>
								Create Account
							</button>
						</form>
					</>
				) : (
					<div>
						<h1 className="text-2xl font-bold mb-6">Account Details</h1>
						<div className="space-y-4">
							<div className="p-4 bg-gray-700 rounded-md">
								<p className="text-gray-100 font-medium">
									Bank Name: {accountDetails.bankName}
								</p>
								<p className="text-gray-100 font-medium">
									Account Number: {accountDetails.accountNumber}
								</p>
								<p className="text-gray-100 font-medium">
									IFSC Code: {accountDetails.ifscCode}
								</p>
								<p className="text-gray-100 font-medium">
									Balance: ₹{accountDetails.balance}
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default BankAccountPage;
