import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useBankAccount from "../zustand/useBankAccount.js";

const useBankDetails = () => {
	const [loading, setLoading] = useState(false);
	const { setAccountDetails } = useBankAccount();

	const bankDetails = async () => {
		setLoading(true);
		try {
			const res = await fetch("/api/bank/getAccountDetail");
			const data = await res.json();
			if (!res.ok) {
				throw new Error(data);
			}
			setAccountDetails(data);
		} catch (error) {
			setAccountDetails(null);
			toast.error("create Your bank Account");
		} finally {
			setLoading(false);
		}
	};

	return { loading, bankDetails };
};
export default useBankDetails;
