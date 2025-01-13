import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res, next) => {
	try {
		const { username, email, password } = req.body;
		if (!username || !email || !password) {
			return next(errorHandler(400, "All fields are reqired"));
		}
		const userExist = await User.findOne({ email });
		if (userExist) {
			return next(errorHandler(400, "User already exist"));
		}
		const hashPassword = bcryptjs.hashSync(password, 10);
		const newUser = await User.create({
			username,
			email,
			password: hashPassword,
		});

		await newUser.save();
		generateToken(newUser._id, res);
		res.json(newUser);
	} catch (error) {
		next(error);
	}
};

export const signin = async (req, res, next) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return next(errorHandler(400, "All fields are required"));
	}
	try {
		const validUser = await User.findOne({ email });
		if (!validUser) {
			return next(errorHandler(400, "user not found"));
		}
		const validPassword = await bcryptjs.compare(
			password,
			validUser?.password || ""
		);
		if (!validPassword) {
			return next(errorHandler(400, "Invalid Padssword"));
		}
		generateToken(validUser._id, res);
		const { password: pass, ...rest } = validUser._doc;
		res.status(200).json(rest);
	} catch (error) {
		next(error);
	}
};
