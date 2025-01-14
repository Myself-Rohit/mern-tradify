import { useState } from "react";
import toast from "react-hot-toast";
import useBankAccount from "../zustand/useBankAccount.js";

const useCreateBankAccount = () => {
	const [loading, setLoading] = useState(false);
	const { setAccountDetails } = useBankAccount();
	const createBankAccount = async (bankName, id) => {
		try {
			const res = await fetch(`/api/bank/create/${id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ bankName }),
			});
			const data = await res.json();

			if (!res.ok) {
				throw new Error(data);
			}
			setAccountDetails(data);
			toast.success("Account Created Successfully");
		} catch (error) {
			toast.error("Something went wrong!");
		} finally {
			setLoading(false);
		}
	};
	return { loading, createBankAccount };
};
export default useCreateBankAccount;
