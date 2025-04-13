import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const useGetCompanies = () => {
	const [loading, setLoading] = useState(false);
	const [companies, setCompanies] = useState([]);
	useEffect(() => {
		const getCompanies = async () => {
			try {
				setLoading(true);
				const res = await fetch("/api/company/all", {
					method: "GET",
					credentials: "include",
				});
				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				console.log("ddd", data);
				setCompanies(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		getCompanies();
	}, []);

	return { loading, companies };
};

export default useGetCompanies;
