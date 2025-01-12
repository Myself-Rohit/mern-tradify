import React from "react";
import useGetCompanies from "../hooks/useGetCompanies.js";
import Company from "./Company";

const CompantList = () => {
	const { loading, companies } = useGetCompanies();
	return (
		<>
			{loading ? (
				<div className="flex items-center justify-center min-h-72">
					<img
						className="bg-[#31353f] "
						src="https://img.icons8.com/?size=48&id=bqwboO9Yuw1Q&format=gif"
					/>
				</div>
			) : (
				companies.length && (
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-9 md:w-2/3 mx-auto">
						{companies.map((company) => {
							return <Company key={company._id} company={company} />;
						})}
					</div>
				)
			)}
		</>
	);
};

export default CompantList;
