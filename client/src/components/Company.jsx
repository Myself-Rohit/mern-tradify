import React from "react";

function Company({ company }) {
	console.log(company);
	return (
		<div className="bg-black text-gray-300 rounded-lg w-44 overflow-hidden">
			<img className="w-full" src={company.logo} />
			<div className="flex items-center justify-between p-2 ">
				<p>{company.name}</p>
				<span>${company.stockPrice}</span>
			</div>
		</div>
	);
}

export default Company;
