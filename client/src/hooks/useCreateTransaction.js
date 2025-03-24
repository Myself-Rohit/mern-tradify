import { useState } from "react";
import toast from "react-hot-toast";

const useCreateTransaction = () => {
	const [loading, setLoading] = useState(false);
	const createTransaction = async (formData) => {
		try {
			const res = await fetch(`/api/transaction/create`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();

			if (data.ok) {
				console.log(res.data);
			}
			toast.success("Successfull transaction");
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong!");
		} finally {
			setLoading(false);
		}
	};
	return { loading, createTransaction };
};
export default useCreateTransaction;
