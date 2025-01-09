import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(undefined);

export const useAuthContext = () => {
	const context = useContext(AuthContext);
	return context;
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(
		JSON.parse(localStorage.getItem("loggedInUser") || "null")
	);

	return (
		<AuthContext.Provider value={{ authUser, setAuthUser }}>
			{children}
		</AuthContext.Provider>
	);
};
