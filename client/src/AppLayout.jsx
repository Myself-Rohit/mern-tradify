import React from "react";
import Dashbord from "./components/Dashbord";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import { Outlet } from "react-router";

function AppLayout() {
	return (
		<div className="bg-[#31353f] text-white flex justify-between min-h-screen text-Tahoma">
			<LeftSidebar />
			<Outlet />
			<RightSidebar />
		</div>
	);
}

export default AppLayout;
