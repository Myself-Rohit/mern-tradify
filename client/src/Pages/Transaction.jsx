import React, { useState } from "react";
import { useParams } from "react-router";
import useGetCompanyById from "../hooks/useGetCompanyById.js";
import useCreateTransaction from "../hooks/useCreateTransaction.js";

const Transaction = () => {
	const { type, companyId } = useParams();
	const { company } = useGetCompanyById(companyId);
	const { createTransaction } = useCreateTransaction();
	const [formData, setFormData] = useState({ companyId, type, shares: 0 });
	if (!company) {
		return;
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		createTransaction(formData);
	};

	return (
		<div className="bg-gray-800 p-6 rounded-lg">
			<h3 className="text-lg font-semibold mb-4">
				{type[0].toUpperCase() + type.slice(1)} Stocks
			</h3>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label htmlFor="stock" className="block mb-2">
						Select Stock
					</label>
					<div
						id="stock"
						className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
					>
						{company?.name}
					</div>
				</div>
				<div>
					<label htmlFor="quantity" className="block mb-2">
						Quantity
					</label>
					<input
						onChange={(e) =>
							setFormData({ ...formData, shares: e.target.value })
						}
						type="number"
						id="quantity"
						placeholder="Enter quantity"
						className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
					/>
				</div>
				<button
					type="submit"
					className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
				>
					{type[0].toUpperCase() + type.slice(1)}
				</button>
			</form>
		</div>
	);
};

export default Transaction;
