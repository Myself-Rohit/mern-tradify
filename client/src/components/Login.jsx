import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

function Login() {
	const [formData, setFormData] = useState({});
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch(`http://localhost:5000/api/auth/signin`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			if (res.ok) {
				const data = await res.json();
				localStorage.setItem("user", JSON.stringify(data));
				return navigate("/");
			} else {
			}
		} catch (error) {
			console.log("errr", error);
		}
	};
	return (
		<div className="grid place-items-center min-h-screen ">
			<div className="bg-white shadow-[1px_9px_28px_9px_#63b3ed] min-w-[95%] flex flex-col-reverse sm:flex-row-reverse rounded-2xl overflow-hidden">
				<form
					onSubmit={handleSubmit}
					className="flex-1 flex flex-col gap-4 items-center justify-center py-20 mx-auto"
				>
					<h1 className="text-3xl font-bold text-center">Hello Friends</h1>

					<input
						id="email"
						onChange={(e) =>
							setFormData({ ...formData, [e.target.id]: e.target.value })
						}
						className="py-4 px-8  rounded-full shadow-[1px_2px_11px_0px_#63b3ed] focus:shadow-[inset_1px_2px_11px_0px_#63b3ed] outline-none w-[95%] sm:w-[80%] "
						type="text"
						placeholder="Email"
					/>
					<input
						id="password"
						onChange={(e) =>
							setFormData({ ...formData, [e.target.id]: e.target.value })
						}
						className="py-4 px-8  rounded-full shadow-[1px_2px_11px_0px_#63b3ed] focus:shadow-[inset_1px_2px_11px_0px_#63b3ed] outline-none w-[95%] sm:w-[80%] "
						type="password"
						placeholder="Password"
					/>
					<p className="text-xs text-gray-600">
						Don't have an Account?
						<Link className="text-indigo-500 ml-1" to="/signup">
							Sign Up
						</Link>
					</p>
					<button
						type="submit"
						className="bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-blue-500 py-2 px-7 rounded-full text-white font-semibold disabled:opacity-70"
					>
						{"Sign In"}
					</button>
					{/* {error && (
						<span className="bg-red-200 text-red-700 font-semibold w-2/3 py-2 rounded text-center">
							{error}
						</span>
					)} */}
				</form>
				<div className="flex-1 flex justify-center items-center text-white bg-gradient-to-l from-cyan-500 to-blue-500 py-5">
					<h1 className="text-4xl font-bold">Glad to see you!</h1>
				</div>
			</div>
		</div>
	);
}

export default Login;
