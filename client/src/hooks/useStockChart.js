import { useState } from "react";
import moment from "moment";

const useStockChart = () => {
	const [price, setPrice] = useState([]);
	const [time, setTime] = useState([]);

	const stockChart = (company) => {
		company?.stocks?.map((i) => {
			setPrice((pre) => [...pre, i.price]);
			const t = new Date(i.time).toISOString();
			setTime((pre) => [...pre, moment(t).format("hh:mm")]);
		});
		const data = {
			labels: time,
			datasets: [
				{
					label: company?.name,
					data: price,
					borderColor: "rgba(75, 192, 192, 1)",
					backgroundColor: "rgba(75, 192, 192, 0.2)",
					fill: true,
				},
			],
		};
		const options = {
			responsive: true,
			plugins: {
				legend: {
					position: "top",
				},
				title: {
					display: true,
					text: "Stock Price Trends",
				},
			},
		};

		return { data, options };
		try {
		} catch (error) {}
	};
	return { stockChart };
};

export default useStockChart;
