import React from "react";
import { useAuthContext } from "../context/authContext";
import moment from "moment";
import useGetTransaction from "../hooks/useGetTransaction";

function Profile() {
	const { authUser } = useAuthContext();
	const { loading, data } = useGetTransaction();

	return (
		<>
			<div className="flex">
				<main className="flex-1 p-8">
					<div className="flex justify-between items-center mb-8">
						<h2 className="text-2xl font-semibold">Profile</h2>
						<button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
							Edit Profile
						</button>
					</div>

					<div className="flex flex-col lg:flex-row gap-8">
						<div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 w-full lg:w-1/3">
							<img
								src="https://via.placeholder.com/150"
								alt="Profile"
								className="w-32 h-32 rounded-full border-4 border-gray-700"
							/>
							<button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600">
								Change Picture
							</button>

							<div className="mt-6 space-y-4 text-center">
								<p>
									<strong>Username:</strong> {authUser?.username}
								</p>
								<p>
									<strong>Email:</strong> {authUser?.email}
								</p>
								<p>
									<strong>Date Joined:</strong>
									{moment(authUser?.createdAt).format("DD/MM/YYYY")}
								</p>
							</div>
						</div>

						<div className="flex-1 bg-gray-800 rounded-lg p-6">
							<h3 className="text-xl font-semibold mb-4">Trading Statistics</h3>
							<div className="grid grid-cols-2 gap-4 mb-8">
								<div className="bg-gray-700 p-4 rounded-lg text-center">
									<p className="text-2xl font-bold">
										{authUser?.walletBalance}
									</p>
									<p className="text-gray-400">Dummy Coins</p>
								</div>
								<div className="bg-gray-700 p-4 rounded-lg text-center">
									<p className="text-2xl font-bold">
										{authUser?.portfolio?.length}
									</p>
									<p className="text-gray-400">Total Trades</p>
								</div>
								<div className="bg-gray-700 p-4 rounded-lg text-center">
									<p className="text-2xl font-bold">75%</p>
									<p className="text-gray-400">Profit/Loss</p>
								</div>
								<div className="bg-gray-700 p-4 rounded-lg text-center">
									<p className="text-2xl font-bold">Intermediate</p>
									<p className="text-gray-400">Level</p>
								</div>
							</div>

							<h3 className="text-xl font-semibold mb-4">Recent Activity</h3>

							<ul className="space-y-4">
								{loading ? (
									<div>Loading...</div>
								) : (
									data &&
									data.map((data) => (
										<li key={data?._id} className="bg-gray-700 p-4 rounded-lg">
											<p>
												<strong>Stock {data?.type}:</strong>{" "}
												{data?.companyId?.name}
											</p>
											<p>
												<strong>Amount:</strong> {data?.totalAmount} Coins
											</p>
										</li>
									))
								)}
							</ul>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}

export default Profile;
