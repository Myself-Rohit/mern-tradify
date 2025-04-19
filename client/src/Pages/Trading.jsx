import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
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
import useGetCompanies from "../hooks/useGetCompanies";
import useGetCompanyById from "../hooks/useGetCompanyById";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const Trading = () => {
	const { companies } = useGetCompanies();
	const [selected, setSelected] = useState();
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"July",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const [label, setLabel] = useState(months);

	const day = [];
	const Year = [2025];

	const handleLabel = (e) => {};

	const data = {
		labels: label,
		datasets: [
			{
				label: "Google",
				data: [30, 35, 40, 39, 50, 55],
				borderColor: "rgba(75, 192, 192, 1)",
				backgroundColor: "rgba(75, 192, 192, 0.2)",
				fill: true,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Stock Price Trends",
			},
		},
	};

	return (
		<div className="flex flex-col bg-gray-900 text-gray-200 min-h-screen">
			<header className="bg-gray-800 p-4 text-center">
				<h1 className="text-3xl font-bold">Trading Page</h1>
			</header>
			<main className="p-6">
				<div className="bg-gray-800 p-6 rounded-lg mb-8">
					<h2 className="text-lg font-semibold mb-4">Stock Trends</h2>
					<Line data={data} options={options} className="w-full h-64" />
				</div>

				<div>
					<div className="grid grid-cols-5 gap-2 p-2 border-b-2 border-slate-600 last:border-none bg-gray-800 rounded-t-md ">
						<p>Logo</p>
						<h1>Stock</h1>
						<p>symbol</p>
						<p>Current Price</p>
						<p>Available Shares</p>
					</div>
					{companies?.length &&
						companies.map((company) => (
							<div
								key={company?.id}
								className="grid grid-cols-5 gap-2 items-center p-2 border-b-2 border-slate-600 last:border-none bg-gray-800 last:rounded-b-md"
							>
								<img className="w-10 h-10 " src={company?.logo} />
								<h1>{company?.name}</h1>
								<p>{company?.symbol}</p>
								<p>{company?.currentPrice}</p>
								<p>{company?.availableShares}</p>
							</div>
						))}
				</div>
			</main>
		</div>
	);
};

export default Trading;
