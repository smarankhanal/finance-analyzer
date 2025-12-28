import asyncHandler from "../utlis/asyncHandler.js";
import ApiError from "../utlis/ApiError.js";
import { User } from "../models/user.model.js";
const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", " ");

    if (!token || token === "undefined") {
      throw new ApiError(401, "Access Token is missing or invalid");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(
      decodedToken?.id || decodedToken?._id
    ).select("-password -refreshToken");

    if (!user) {
      throw new ApiError(401, "Invalid user!!!");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});
export { verifyJWT };
