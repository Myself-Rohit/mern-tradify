import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useBankDetails = () => {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const bankDetails = async () => {
			setLoading(true);
			try {
				const res = await fetch("/api/bank/getAccountDetail");
				const data = await res.json();
				if (data.success) {
					setAccountDetails(data);
				}
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		bankDetails();
	}, []);
	return { loading };
};
export default useBankDetails;
