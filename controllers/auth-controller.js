import "dotenv/config";
import jwt from "jsonwebtoken";
import fs from "fs/promises";
import path from "path";
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";
import User from "../schemas/User.js";
import HttpError from "../helpers/HttpError.js";

const { JWT_SECRET } = process.env;

const creatUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const userTransfer = await User.findOne({ email });
  if (userTransfer) {
    return next(HttpError(409, "Such an email is already registered"));
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const verifyCode = nanoid();

  const result = await User.create({
    ...req.body,
    email,
    name,
    password: hashPassword,
    verifyToken: verifyCode,
  });

  const { _id: id } = result;
  const payload = {
    id,
  };
  const token = jwt.sign(payload, JWT_SECRET);
  await User.findByIdAndUpdate(id, { token, verify: true });

  res.status(201).json({
    token,
    user: {
      name: result.name,
      email: result.email,
    },
  });
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (!findUser) {
    return next(HttpError(401, "Email or password is wrong"));
  }

  if (!findUser.verify) {
    return next(HttpError(401, "It's email not verify"));
  }

  const comparePassword = await bcrypt.compare(password, findUser.password);
  if (!comparePassword) {
    return next(HttpError(401, "Email or password is wrong"));
  }

  res.json({
    token: findUser.token,
    user: {
      name: findUser.name,
      email,
    },
  });
};

const currentUser = async (req, res) => {
  const { email } = req.user;

  res.json({
    email,
  });
};

const logoutUser = async (req, res, next) => {
  const { email } = req.body;
  const findUser = User.findOne({ email });

  if (!findUser) {
    return next(HttpError(401, "Not authorized"));
  }

  const { _id: id } = findUser;
  await User.findByIdAndUpdate(id, { verify: false });

  res.status(204).json();
};

const changeURLAvatar = async (req, res) => {
  const { _id: id } = req.user;
  const result = await User.findOne(id);

  if (!result) {
    return next(HttpError(401, "Not authorized"));
  }
};

export default {
  creatUser,
  loginUser,
  currentUser,
  logoutUser,
  changeURLAvatar,
};
