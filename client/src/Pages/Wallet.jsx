import React from "react";
import { useAuthContext } from "../context/authContext";
import useGetTransaction from "../hooks/useGetTransaction.js";
import moment from "moment";

const WalletPage = () => {
	const { authUser } = useAuthContext();
	const { loading, data } = useGetTransaction();

	if (loading) {
		return <div>Loading</div>;
	}

	return (
		<>
			<div className="min-h-screen bg-gray-900 text-gray-200 p-8">
				<h1 className="text-3xl font-bold mb-6">Wallet</h1>
				<div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
					{/* Wallet Balance */}
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-2xl font-semibold">Wallet Balance</h2>
						<span className="text-3xl font-bold text-green-400">
							{authUser?.walletBalance} DC
						</span>
					</div>

					{/* Actions */}
					<div className="flex gap-4 mb-8">
						<button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
							Add Coins
						</button>
						<button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
							Withdraw Coins
						</button>
					</div>

					<div className="flex">
						<main className="flex-1 p-8">
							<div className="bg-gray-800 p-6 rounded-lg">
								<h3 className="text-lg font-semibold mb-4">Earn More Coins</h3>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									<div className="bg-gray-700 p-4 rounded-lg text-center">
										<p className="font-semibold">Complete a Quiz</p>
										<button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
											Earn 100 Coins
										</button>
									</div>

									<div className="bg-gray-700 p-4 rounded-lg text-center">
										<p className="font-semibold">Refer a Friend</p>
										<button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
											Earn 50 Coins
										</button>
									</div>

									<div className="bg-gray-700 p-4 rounded-lg text-center">
										<p className="font-semibold">Daily Login Bonus</p>
										<button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
											Claim 10 Coins
										</button>
									</div>
								</div>
							</div>
						</main>
					</div>
					{/* Transaction History */}
					<div>
						<h3 className="text-xl font-semibold mb-4">Transaction History</h3>
						<div className="bg-gray-700 rounded-lg shadow-lg p-4">
							{data?.length ? (
								<table className="w-full text-left">
									<thead>
										<tr className="text-gray-400">
											<th className="py-2">#</th>
											<th className="py-2">Type</th>
											<th className="py-2">Amount</th>
											<th className="py-2">Date</th>
										</tr>
									</thead>
									<tbody>
										{data &&
											data.map((transaction, index) => (
												<tr
													key={transaction._id}
													className="border-b border-gray-600 hover:bg-gray-600"
												>
													<td className="py-2">{index + 1}</td>
													<td className="py-2">
														<span
															className={`px-2 py-1 rounded-lg ${
																transaction.type === "buy"
																	? "bg-green-500"
																	: "bg-red-500"
															}`}
														>
															{transaction.type}
														</span>
													</td>
													<td className="py-2">
														{transaction?.shares * transaction?.pricePerShare}{" "}
														DC
													</td>
													<td className="py-2">
														{moment(transaction.date).format(
															"DD/MM/YYYY hh:mm:ss"
														)}
													</td>
												</tr>
											))}
									</tbody>
								</table>
							) : (
								<p className="text-gray-400">No transactions yet.</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WalletPage;
