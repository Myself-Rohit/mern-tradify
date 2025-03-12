import React from "react";
import useGetCompanyById from "../hooks/useGetCompanyById.js";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router";

// Register Chart.js components
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const CompanyDetails = () => {
	const { id } = useParams();
	const { loading, company } = useGetCompanyById(id);
	// Example stock price trend data
	const stockPriceData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // X-axis labels
		datasets: [
			{
				label: "Stock Price ($)",
				data: [120, 125, 130, 128, 135, 140, 145], // Y-axis values
				borderColor: "rgba(75, 192, 192, 1)",
				backgroundColor: "rgba(75, 192, 192, 0.2)",
				borderWidth: 2,
				pointRadius: 3,
				tension: 0.3, // Smooth line
			},
		],
	};

	const chartOptions = {
		responsive: true,
		plugins: {
			legend: {
				display: true,
				position: "top",
				labels: {
					color: "#fff",
				},
			},
			tooltip: {
				callbacks: {
					label: (context) => `$${context.raw}`,
				},
			},
		},
		scales: {
			x: {
				ticks: {
					color: "#fff",
				},
			},
			y: {
				ticks: {
					color: "#fff",
					callback: (value) => `$${value}`,
				},
			},
		},
	};

	return (
		<div className="min-h-screen bg-gray-900 text-gray-200 p-8">
			<h1 className="text-3xl font-bold mb-6">Stock Visualization</h1>
			<div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
				<div className="flex items-center mb-6">
					<img
						src={company?.logo}
						alt={`${company?.name} logo`}
						className="w-16 h-16 rounded-full mr-4"
					/>
					<div>
						<h2 className="text-2xl font-semibold">{company?.name}</h2>
						<p className="text-gray-400">{company?.symbol}</p>
					</div>
				</div>
				<div className="space-y-4">
					<div className="flex justify-between items-center">
						<span className="text-lg">Stock Price:</span>
						<span className="text-xl font-bold text-green-400">
							${company?.stockPrice}
						</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="text-lg">Total Shares:</span>
						<span className="text-xl font-semibold">
							{company?.totalShares}
						</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="text-lg">Available Shares:</span>
						<span className="text-xl font-semibold text-yellow-400">
							{company?.availableShares}
						</span>
					</div>
				</div>
				<div className="mt-8">
					<h3 className="text-lg font-semibold mb-4">Stock Price Trend</h3>
					<div className="w-full bg-gray-700 p-4 rounded-lg">
						<Line data={stockPriceData} options={chartOptions} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CompanyDetails;
