import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const useGetCompanyById = () => {
	const [loading, setLoading] = useState(false);
	const [company, setCompany] = useState([]);

	const getCompanyById = async (id) => {
		try {
			setLoading(true);
			const res = await fetch(`/api/company/${id}`, {
				method: "GET",
				credentials: "include",
			});
			const data = await res.json();

			if (data.error) {
				throw new Error(data.error);
			}
			setCompany(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
		return { company };
	};

	return { loading, getCompanyById };
};

export default useGetCompanyById;
