import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
const useGetTransaction = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const getTransaction = async () => {
		try {
			const res = await axios.get(`/api/transaction/recent`);
			if (res.data) {
				console.log("res>>>", res.data);
				setData(res.data);
			}
		} catch (error) {
			toast.error(
				error?.response?.data || error?.message || "Failed to get transactions"
			);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getTransaction();
	}, []);
	return { loading, data };
};
export default useGetTransaction;
