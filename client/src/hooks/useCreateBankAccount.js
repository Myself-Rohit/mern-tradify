import { useState } from "react";
import toast from "react-hot-toast";

const useCreateBankAccount = () => {
	const [loading, setLoading] = useState(false);

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
			setAccountDetails(data);
			toast.success("Account Created Successfully");
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return { loading, createBankAccount };
};
export default useCreateBankAccount;
