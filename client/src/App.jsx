import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AppLayout from "./AppLayout";
import { useAuthContext } from "./context/authContext";
import Dashbord from "./components/Dashbord";
import CompanyDetail from "./components/CompanyDetail";
import Profile from "./Pages/Profile";

function App() {
	const { authUser } = useAuthContext();
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={authUser ? <AppLayout /> : <Navigate to="/login" />}
				>
					<Route path="/" element={<Dashbord />} />
					<Route path="/profile" element={<Profile />} />
					<Route path=":id" element={<CompanyDetail />} />
				</Route>
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
