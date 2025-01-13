import React, { useState } from "react";
import arrow from "../assets/images/arrow.svg";
import stocks from "../assets/images/stocks.svg";
import tradeIcon from "../assets/images/tradeIcon.svg";
import { Link } from "react-router";
import { useAuthContext } from "../context/authContext";

function RightSidebar() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const { authUser } = useAuthContext();
	const handleSidebar = () => {
		setOpenSidebar(!openSidebar);
	};
	return (
		<div
			className={`bg-[#1b202b] fixed h-screen top-0 right-0 p-2 duration-500 ${
				openSidebar ? "w-56 " : "w-10 sm:w-20"
			} `}
		>
			<div className="flex items-center justify-around mt-4">
				<img className={`rounded-full w-12`} src={authUser?.profilePic} />
				{openSidebar && <p>{authUser?.username}</p>}
			</div>
			<img
				className={`w-7 py-5 mx-auto cursor-pointer  duration-700 ${
					openSidebar ? "" : "rotate-180"
				}`}
				src={arrow}
				onClick={handleSidebar}
			/>
			<div className="flex flex-col gap-2 h-5/6">
				<Link
					to={"/stocks"}
					onClick={() => setOpenSidebar(false)}
					className="hover:bg-blue-500 rounded-md p-2 flex items-center justify-center gap-5"
				>
					<img className="min-w-5 w-7" src={stocks} />
					<span className={`w-[50%] ${!openSidebar && "hidden"}`}>Stocks</span>
				</Link>
				<Link
					to={"/trading"}
					onClick={() => setOpenSidebar(false)}
					className="hover:bg-blue-500 rounded-md p-2 flex items-center justify-center gap-5"
				>
					<img className="min-w-5 w-7" src={tradeIcon} />
					<span className={`w-[50%] ${!openSidebar && "hidden"}`}>Trading</span>
				</Link>
			</div>
		</div>
	);
}

export default RightSidebar;
