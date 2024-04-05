import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from "../utils/apiError.js";
import User from "../models/user.model.js";
import { ApiResponse } from "../utils/apiResponse.js";

const getProfile = asyncHandler(async (req, res) => {
    try {
        const id = req.user._id;
        const user = await User.findOne({ _id: id });
        if (!user) {
            throw new ApiError(404, "User not found");
        }
        return res.status(200).json(new ApiResponse(200, user));
    } catch (error) {
        throw new ApiError(500, "Error getting user");
    }
})

export { getProfile };