import useGetCompanyById from "../hooks/useGetCompanyById";
import { useParams } from "react-router";

function CompanyDetail() {
	const { id } = useParams();
	const { loading, company } = useGetCompanyById(id);

	return (
		<div className="container mx-auto py-8 px-4">
			{/* <!-- Header --> */}
			<div className="bg-white shadow-md rounded-lg p-6">
				<div className="flex justify-between items-center">
					<div>
						<h1 className="text-2xl font-bold text-gray-800">Company Name</h1>
						<p className="text-sm text-gray-500">
							Ticker Symbol: <span className="font-medium">CMPY</span>
						</p>
					</div>
					<div className="text-right">
						<p className="text-lg font-bold text-green-500">$123.45</p>
						<p className="text-sm text-gray-500">+2.34% Today</p>
					</div>
				</div>
			</div>

			{/* <!-- Stock Performance --> */}
			<div className="mt-6 bg-white shadow-md rounded-lg p-6">
				<h2 className="text-lg font-semibold text-gray-800">
					Stock Performance
				</h2>
				<div className="mt-4 grid grid-cols-3 gap-4">
					<div className="text-center">
						<p className="text-sm text-gray-500">Open</p>
						<p className="text-lg font-medium text-gray-800">$120.00</p>
					</div>
					<div className="text-center">
						<p className="text-sm text-gray-500">High</p>
						<p className="text-lg font-medium text-gray-800">$125.00</p>
					</div>
					<div className="text-center">
						<p className="text-sm text-gray-500">Low</p>
						<p className="text-lg font-medium text-gray-800">$118.50</p>
					</div>
				</div>
				<div className="mt-6 text-center">
					<p className="text-sm text-gray-500">52-Week Range</p>
					<p className="text-lg font-medium text-gray-800">$90.00 - $140.00</p>
				</div>
			</div>
			<div className="mt-6 bg-white shadow-md rounded-lg p-6">
				<h2 className="text-lg font-semibold text-gray-800">
					About the Company
				</h2>
				<p className="mt-4 text-gray-600">
					This company specializes in technology solutions and services, with a
					strong emphasis on innovation and growth. It has consistently
					delivered value to its shareholders.
				</p>
			</div>

			{/* <!-- Action Section --> */}
			<div className="mt-6 bg-white shadow-md rounded-lg p-6">
				<h2 className="text-lg font-semibold text-gray-800">Take Action</h2>
				<div className="mt-4 flex justify-around">
					<button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600">
						Buy Stock
					</button>
					<button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600">
						Sell Stock
					</button>
				</div>
			</div>

			{/* <!-- Recent News --> */}
			<div className="mt-6 bg-white shadow-md rounded-lg p-6">
				<h2 className="text-lg font-semibold text-gray-800">Recent News</h2>
				<ul className="mt-4 space-y-4">
					<li className="border-b pb-4">
						<a href="#" className="text-blue-500 hover:underline">
							Quarterly earnings exceed expectations by 15%
						</a>
						<p className="text-sm text-gray-500 mt-1">
							Published on: Jan 8, 2025
						</p>
					</li>
					<li className="border-b pb-4">
						<a href="#" className="text-blue-500 hover:underline">
							New product launch announced for Q2
						</a>
						<p className="text-sm text-gray-500 mt-1">
							Published on: Dec 20, 2024
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default CompanyDetail;
