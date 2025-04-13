import React from "react";
import { Link } from "react-router";

function Company({ company }) {
	return (
		<Link
			to={`/${company._id}`}
			className="bg-black text-gray-300 rounded-lg max-w-56 overflow-hidden "
		>
			<img className="aspect-square" src={company.logo} />
			<div className="flex items-center justify-between p-2 text-xs sm:text-base">
				<p>{company.name}</p>
				<span>${company.currentPrice}</span>
			</div>
		</Link>
	);
}

export default Company;
