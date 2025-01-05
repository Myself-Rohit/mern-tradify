import React from "react";
import Dashbord from "./components/Dashbord";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";

function AppLayout() {
	return (
		<div className="bg-[#31353f] text-white flex justify-between min-h-screen text-Tahoma">
			<LeftSidebar />
			<Dashbord />
			<RightSidebar />
		</div>
	);
}

export default AppLayout;
