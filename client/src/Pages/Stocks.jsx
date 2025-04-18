import React from "react";
import useGetCompanies from "../hooks/useGetCompanies.js";
import { Link } from "react-router";

function Stocks() {
	const { loading, companies } = useGetCompanies();

	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="flex">
			<main className="flex-1 p-8">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-2xl font-semibold">Stocks</h2>
					<input
						type="text"
						placeholder="Search Stocks"
						className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
					/>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{companies &&
						companies.length &&
						companies.map((data) => (
							<div key={data?._id} className="bg-gray-800 p-6 rounded-lg">
								<h3 className="text-lg font-semibold">{data?.name}</h3>
								<p className="text-4xl font-bold text-blue-400">
									${data?.currentPrice}
								</p>
								<div className="flex gap-3">
									<Link
										to={`/sell/${data?._id}`}
										className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
									>
										Sell
									</Link>
									<Link
										to={`/buy/${data?._id}`}
										className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
									>
										Buy
									</Link>
								</div>
							</div>
						))}
				</div>
			</main>
		</div>
	);
}

export default Stocks;
