import React from "react";
import CompantList from "./CompantList";

function Dashbord() {
	return (
		<div className="py-10 ">
			{/* logo */}
			<div className="dashboard-logo max-w-72 mx-auto">
				<img
					className=""
					src="https://github.com/Myself-Rohit/Tradify/blob/main/images/logo.png?raw=true"
				/>
			</div>

			{/* Search div  */}
			<div className="p-1 mt-10 max-w-96 flex items-center bg-[#1b202b] border-2 border-[#e2e0de] mx-auto rounded-md ">
				<img
					className="w-7"
					src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-64.png"
				/>
				<input
					className="bg-[#1b202b] grow focus:outline-none text-xs"
					placeholder="Search For Company"
				/>
				<img
					className="w-7"
					src="https://myself-rohit.github.io/Tradify/images/sendIcon.svg"
					title="search"
				/>
			</div>
			{/* companies list */}
			<div className="main">
				<CompantList />
			</div>
		</div>
	);
}

export default Dashbord;
