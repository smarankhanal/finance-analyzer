import { Router } from "express";
import { registerValidator } from "../validators/auth.validators.js";
import { validate } from "../middlewares/validate.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  login,
  logout,
  registerUser,
  refreshAccessToken,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();
router
  .route("/register")
  .post(
    upload.fields([{ name: "avatar", maxCount: 1 }]),
    registerValidator,
    validate,
    registerUser
  );
router.route("/login").post(login);
router.route("/logout").post(verifyJWT, logout);
router.route("/refresh-token").post(refreshAccessToken);
export default router;
