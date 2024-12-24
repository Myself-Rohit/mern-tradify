import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
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
	try {
		await newUser.save();
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
		const validPassword = bcryptjs.compareSync(password, validUser.password);
		if (!validPassword) {
			return next(errorHandler(400, "Invalid Padssword"));
		}
		const token = jwt.sign(
			{ id: validUser._id, isAdmin: validUser.isAdmin },
			process.env.SECRET_KEY
		);
		const { password: pass, ...rest } = validUser._doc;
		res
			.status(200)
			.cookie("access_token", token, { httpOnly: true })
			.json(rest);
	} catch (error) {
		next(error);
	}
};
