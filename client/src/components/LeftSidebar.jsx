import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import arrow from "../assets/images/arrow.svg";
import dashboard from "../assets/images/dashboard.png";
import profile from "../assets/images/profile.svg";
import wallet from "../assets/images/wallet.svg";
import contactus from "../assets/images/contactus.svg";
import aboutus from "../assets/images/aboutus.svg";
import settings from "../assets/images/settings.svg";
import logout from "../assets/images/logout.svg";
import { Link } from "react-router";

function LeftSidebar() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const handleSidebar = () => {
		setOpenSidebar(!openSidebar);
	};
	return (
		<div
			className={`bg-[#1b202b] fixed h-screen top-0 left-0 p-2 duration-500 ${
				openSidebar ? "w-56 " : "w-10 sm:w-20"
			} `}
		>
			<img className={`max-w-full ${!openSidebar && "hidden"}`} src={logo} />
			<img
				className={`w-7 py-5 mx-auto cursor-pointer  duration-700 ${
					openSidebar && "rotate-180"
				}`}
				src={arrow}
				onClick={handleSidebar}
			/>
			<div className="flex flex-col gap-2 h-5/6">
				<Link
					to={"/"}
					onClick={() => setOpenSidebar(false)}
					className="hover:bg-blue-500 rounded-md p-2 flex items-center justify-center gap-5"
				>
					<img className="min-w-5 w-7" src={dashboard} />
					<span className={`w-[50%] ${!openSidebar && "hidden"}`}>
						Dashboard
					</span>
				</Link>
				<Link
					to={"/profile"}
					onClick={() => setOpenSidebar(false)}
					className="hover:bg-blue-500 rounded-md p-2 flex items-center justify-center gap-5"
				>
					<img className="min-w-5 w-7" src={profile} />
					<span className={`w-[50%] ${!openSidebar && "hidden"}`}>Profile</span>
				</Link>
				<Link
					to={"/wallet"}
					onClick={() => setOpenSidebar(false)}
					className="hover:bg-blue-500 rounded-md p-2 flex items-center justify-center gap-5"
				>
					<img className="min-w-5 w-7" src={wallet} />
					<span className={`w-[50%] ${!openSidebar && "hidden"}`}>Wallet</span>
				</Link>
				<Link
					to={"/"}
					onClick={() => setOpenSidebar(false)}
					className="hover:bg-blue-500 rounded-md p-2 flex items-center justify-center gap-5"
				>
					<img className="min-w-5 w-7" src={contactus} />
					<span className={`w-[50%] ${!openSidebar && "hidden"}`}>
						Contact Us
					</span>
				</Link>
				<Link
					to={"/"}
					onClick={() => setOpenSidebar(false)}
					className="hover:bg-blue-500 rounded-md p-2 flex items-center justify-center gap-5"
				>
					<img className="min-w-5 w-7" src={aboutus} />
					<span className={`w-[50%] ${!openSidebar && "hidden"}`}>
						About Us
					</span>
				</Link>
				<span className="grow"></span>
				<Link
					to={"/"}
					onClick={() => setOpenSidebar(false)}
					className="hover:bg-blue-500 rounded-md p-2 flex items-center justify-center gap-5"
				>
					<img className="min-w-5 w-7" src={settings} />
					<span className={`w-[50%] ${!openSidebar && "hidden"}`}>
						Settings
					</span>
				</Link>
				<Link
					to={"/"}
					onClick={() => setOpenSidebar(false)}
					className="hover:bg-blue-500 rounded-md p-2 flex items-center justify-center gap-5"
				>
					<img className="min-w-5 w-7" src={logout} />
					<span className={`w-[50%] ${!openSidebar && "hidden"}`}>Logout</span>
				</Link>
			</div>
		</div>
	);
}

export default LeftSidebar;
