import React from "react";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AppLayout from "./AppLayout";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<AppLayout />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</>
	);
}

export default App;
