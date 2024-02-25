import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import app from "../app.js";
import { getUserByIdDb } from "../modules/users/db.js";
import { badRequestErrorCreator } from "./errors.js";

const accessKey = app.get("accessKey");
const refreshKey = app.get("refreshKey");

export const validate = (schema) => {
  if (typeof schema !== "object" || schema === null) {
    throw new Error("Schema is not an object");
  }

  return async (req, res, next) => {
    const { params, body } = req;

    try {
      schema.params && (await schema.params.validateAsync(params));
      schema.body && (await schema.body.validateAsync(body));
      return next();
    } catch (error) {
      return next(badRequestErrorCreator(error.details));
    }
  };
};

export const verifyUser = async (req, res, next) => {
  try {
    const accessToken = req.cookies["access-token"];

    if (!accessToken) {
      res.clearCookie("access-token");

      return res.send({
        isAuth: false,
      });
    }

    const accessTokenCheck = validTokenCheck(accessToken, "access");

    if (accessTokenCheck.error) {
      res.clearCookie("access-token");

      return res.status(401).send({ error: "Unauthorized", isAuth: false });
    }

    const id = accessTokenCheck.decode.id;

    const user = await getUserByIdDb(id);

    if (accessTokenCheck.error) {
      const refreshTokenCheck = validTokenCheck(
        user.data.refreshToken,
        "refresh",
      );
      if (refreshTokenCheck.error) {
        res.clearCookie("access-token");

        return res.status(401).send({ error: "Unauthorized", isAuth: false });
      }
    }

    //user is logged in

    res.locals.isAuth = true;
    res.locals.user = user;

    console.log("check check check");

    return next();
  } catch (err) {
    next(err);
  }
};

export const responseDataCreator = ({ data }) => ({
  data,
  count: data.length,
});

export const hashPassword = async (password) => {
  const saltRounds = 8;
  const myPlaintextPassword = password;

  const hashedPassword = await bcrypt.hash(myPlaintextPassword, saltRounds);
  return hashedPassword;
};

export const comparePassword = async (password, hashedPassword) => {
  const compareResult = await bcrypt.compare(password, hashedPassword);
  return compareResult;
};

export const signToken = (payload, type) => {
  const key = type === "access" ? accessKey : refreshKey;
  const expirationDate = type === "access" ? "1d" : "30d"; //seconds - minutes

  const token = jwt.sign(payload, key, {
    expiresIn: expirationDate,
  });

  return token;
};
export const validTokenCheck = (token, type) => {
  const key = type === "access" ? accessKey : refreshKey;
  const result = {
    decode: {},
    error: null,
  };
  let decoded;

  try {
    decoded = jwt.verify(token, key); //verify to check token is valid or not
  } catch (err) {
    result.error = err;
  }

  if (!decoded) {
    decoded = jwt.decode(token, key);
  }
  result.decode = decoded;

  return result;
};
