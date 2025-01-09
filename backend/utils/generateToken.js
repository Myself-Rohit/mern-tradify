import jwt from "jsonwebtoken";

const generateToken = (id, res) => {
	try {
		const token = jwt.sign({ id }, process.env.SECRET_KEY, {
			expiresIn: "15d",
		});
		res.cookie("token", token, {
			maxAge: 15 * 24 * 60 * 60 * 1000,
			httpOnly: true,
			secure: false,
		});
	} catch (error) {
		console.error("Error generating token:", error);
		res.status(500).send("Token generation failed");
	}
};

export default generateToken;
