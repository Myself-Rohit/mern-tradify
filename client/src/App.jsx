import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AppLayout from "./AppLayout";
import { useAuthContext } from "./context/authContext";

function App() {
	const { authUser } = useAuthContext();
	return (
		<>
			<Routes>
				<Route path="/" element={authUser ? <AppLayout /> : <Login />} />
				<Route
					path="/login"
					element={authUser ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/signup"
					element={authUser ? <Navigate to="/" /> : <SignUp />}
				/>
			</Routes>
		</>
	);
}

export default App;
