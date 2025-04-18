import React, { useState } from "react";

const SettingsPage = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [notifications, setNotifications] = useState({
		email: true,
		sms: false,
	});

	const handleThemeChange = () => {
		setIsDarkMode(!isDarkMode);
		alert(`Switched to ${!isDarkMode ? "Dark" : "Light"} Mode`);
	};

	const handleNotificationsChange = (type) => {
		setNotifications({ ...notifications, [type]: !notifications[type] });
	};

	const handleAccountDelete = () => {
		const confirmDelete = window.confirm(
			"Are you sure you want to delete your account? This action cannot be undone."
		);
		if (confirmDelete) {
			alert("Account deleted successfully!");
		}
	};

	return (
		<div
			className={`${
				isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"
			} min-h-screen p-6`}
		>
			<div className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-8">
				{/* Account Settings */}
				<div className="mb-8">
					<h2 className="text-xl font-semibold mb-4">Account Settings</h2>
					<form className="space-y-4">
						<div>
							<label htmlFor="username" className="block mb-2">
								Username
							</label>
							<input
								type="text"
								id="username"
								placeholder="Enter your username"
								className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
							/>
						</div>
						<div>
							<label htmlFor="email" className="block mb-2">
								Email
							</label>
							<input
								type="email"
								id="email"
								placeholder="Enter your email"
								className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
							/>
						</div>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
						>
							Save Changes
						</button>
					</form>
				</div>

				{/* Notification Preferences */}
				<div className="mb-8">
					<h2 className="text-xl font-semibold mb-4">
						Notification Preferences
					</h2>
					<div className="space-y-4">
						<div className="flex items-center space-x-4">
							<input
								type="checkbox"
								id="email-notifications"
								checked={notifications.email}
								onChange={() => handleNotificationsChange("email")}
								className="h-5 w-5"
							/>
							<label htmlFor="email-notifications">Email Notifications</label>
						</div>
						<div className="flex items-center space-x-4">
							<input
								type="checkbox"
								id="sms-notifications"
								checked={notifications.sms}
								onChange={() => handleNotificationsChange("sms")}
								className="h-5 w-5"
							/>
							<label htmlFor="sms-notifications">SMS Notifications</label>
						</div>
					</div>
				</div>

				{/* Privacy Settings */}
				<div className="mb-8">
					<h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
					<div className="space-y-4">
						<div className="flex items-center space-x-4">
							<button
								className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700"
								onClick={handleAccountDelete}
							>
								Delete Account
							</button>
						</div>
					</div>
				</div>

				{/* Theme Selection */}
				<div>
					<h2 className="text-xl font-semibold mb-4">Theme</h2>
					<div className="flex items-center space-x-4">
						<span>Current Theme: {isDarkMode ? "Dark" : "Light"}</span>
						<button
							className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
							onClick={handleThemeChange}
						>
							Toggle Theme
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
