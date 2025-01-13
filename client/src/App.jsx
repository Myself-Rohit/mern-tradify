import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AppLayout from "./AppLayout";
import { useAuthContext } from "./context/authContext";
import Dashbord from "./components/Dashbord";
import CompanyDetail from "./components/CompanyDetail";
import Profile from "./Pages/Profile";
import Stocks from "./Pages/Stocks";
import Trading from "./Pages/Trading";
import BankAccountPage from "./Pages/BankAccount";
import KycPage from "./Pages/Kyc";
import StockVisualizationPage from "./Pages/StockVisualization";
import WalletPage from "./Pages/Wallet";
import CompanyStockVisualization from "./Pages/CompanyStocks";
import SettingsPage from "./Pages/Settings";

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
					<Route path="/wallet" element={<WalletPage />} />
					<Route path="/stocks" element={<Stocks />} />
					<Route path="/trading" element={<Trading />} />
					<Route path=":id" element={<CompanyDetail />} />
					<Route path="/bankaccount" element={<BankAccountPage />} />
					<Route path="/kyc" element={<KycPage />} />
					<Route path="/stock" element={<StockVisualizationPage />} />
					<Route path="/companystock" element={<CompanyStockVisualization />} />
					<Route path="/settings" element={<SettingsPage />} />
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
