import React, { useEffect, useState } from "react";
import useGetCompanies from "../hooks/useGetCompanies.js";
import Company from "./Company";

const CompantList = () => {
	const { loading, companies } = useGetCompanies();
	console.log(companies);

	return (
		<>
			{companies.length && (
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-9">
					{companies.map((company) => {
						return <Company key={company._id} company={company} />;
					})}
				</div>
			)}
		</>
	);
};

export default CompantList;
