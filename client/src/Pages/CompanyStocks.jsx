import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const CompanyStockVisualization = () => {
	const [selectedCompany, setSelectedCompany] = useState(null);

	const companies = [
		{
			id: 1,
			logo: "https://via.placeholder.com/50",
			name: "TechCorp",
			symbol: "TC",
			stockPrice: 150.75,
			availableShares: 1000,
			totalShares: 5000,
			stockHistory: [145, 148, 150, 152, 150.75], // Mock data
		},
		{
			id: 2,
			logo: "https://via.placeholder.com/50",
			name: "HealthTech",
			symbol: "HT",
			stockPrice: 98.5,
			availableShares: 500,
			totalShares: 2000,
			stockHistory: [95, 96.5, 97, 98, 98.5], // Mock data
		},
	];

	const handleCompanyClick = (company) => {
		setSelectedCompany(company);
	};

	const renderChart = (history) => {
		return {
			labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Today"], // Mock labels
			datasets: [
				{
					label: "Stock Price",
					data: history,
					borderColor: "#4F46E5",
					backgroundColor: "rgba(79, 70, 229, 0.2)",
					fill: true,
				},
			],
		};
	};

	return (
		<div className="min-h-screen bg-gray-900 text-gray-200 p-8">
			<h1 className="text-3xl font-bold mb-6">Company Stock Visualization</h1>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{/* Company List */}
				<div className="col-span-1 bg-gray-800 p-4 rounded-lg shadow-lg">
					<h2 className="text-xl font-semibold mb-4">Companies</h2>
					<ul className="space-y-4">
						{companies.map((company) => (
							<li
								key={company.id}
								className="flex items-center space-x-4 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer"
								onClick={() => handleCompanyClick(company)}
							>
								<img
									src={company.logo}
									alt={`${company.name} Logo`}
									className="w-12 h-12 rounded-full"
								/>
								<div>
									<h3 className="text-lg font-bold">{company.name}</h3>
									<p className="text-sm text-gray-400">
										{company.symbol} - ${company.stockPrice}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>

				{/* Company Details */}
				{selectedCompany ? (
					<div className="col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg">
						<h2 className="text-2xl font-bold mb-4">{selectedCompany.name}</h2>
						<p className="mb-2">
							<span className="font-semibold">Symbol:</span>{" "}
							{selectedCompany.symbol}
						</p>
						<p className="mb-2">
							<span className="font-semibold">Current Stock Price:</span> $
							{selectedCompany.currentPrice}
						</p>
						<p className="mb-2">
							<span className="font-semibold">Available Shares:</span>{" "}
							{selectedCompany.availableShares}
						</p>
						<p className="mb-4">
							<span className="font-semibold">Total Shares:</span>{" "}
							{selectedCompany.totalShares}
						</p>

						{/* Stock Chart */}
						<div>
							<Line data={renderChart(selectedCompany.stockHistory)} />
						</div>
					</div>
				) : (
					<div className="col-span-2 flex items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg">
						<p className="text-gray-400">Select a company to view details</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default CompanyStockVisualization;
