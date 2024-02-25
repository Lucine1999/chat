import { Router } from "express";
import { validate, verifyUser } from "../../helpers/common.js";
import validations from "./validations.js";
import {
  getAllUsers,
  signUpUser,
  signInUser,
  signOutUser,
  sendUserAuth,
} from "./services.js";

const { createUserSchema, loginUserSchema } = validations;

const router = Router();

router.get("/", verifyUser, getAllUsers);
router.get("/auth", verifyUser, sendUserAuth);
router.post("/signIn", validate(loginUserSchema), signInUser);
router.post("/signUp", validate(createUserSchema), signUpUser);
router.post("/signOut", signOutUser);

export { router as usersRoutes };
