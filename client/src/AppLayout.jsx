import React from "react";
import Dashbord from "./components/Dashbord";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import { Outlet } from "react-router";

function AppLayout() {
	return (
		<div className="bg-[#31353f] text-white min-h-screen text-Tahoma">
			<LeftSidebar />
			<div className="px-11 sm:px-24">
				<Outlet />
			</div>

			<RightSidebar />
		</div>
	);
}

export default AppLayout;
