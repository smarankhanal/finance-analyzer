import { Router } from "express";
import { registerValidator } from "../validators/auth.validators.js";
import { validate } from "../middlewares/validate.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { login, logout, registerUser } from "../controllers/user.controller.js";

const router = Router();
router.route("/register").post(registerValidator, validate, registerUser);
router.route("/login").post(login);
router.route("/logout").post(verifyJWT, logout);
export default router;
