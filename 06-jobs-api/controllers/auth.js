const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticationError } = require("../errors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  // const { name, email, password } = req.body;
  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);
  // const tempUser = { name, email, password: hashedPassword };

  // const { name, email, password } = req.body;
  // if (!name || !email || !password) {
  //   throw new BadRequestError("pls provide name,email and password");
  // }
  // const user = await User.create({ ...req.body });
  // const user = await User.create({ ...tempUser });

  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });

  // const token = jwt.sign({ userId: user._id, name: user.name }, "jwtSeret", {
  //   expiresIn: "30d",
  // });

  // res.status(StatusCodes.CREATED).json({ user });
  // res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
  // res
  //   .status(StatusCodes.CREATED)
  //   .json({ user: { name: user.getName() }, token });

  // res.status(StatusCodes.CREATED).json(req.body);
};
const login = async (req, res) => {
  // res.send("login user");
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    throw new BadRequestError("pls privide email and psd");
  }
  const user = await User.findOne({ email });
  //compare psd
  if (!user) {
    throw new UnauthenticationError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticationError("Invalid Credentials");
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};
module.exports = {
  register,
  login,
};
