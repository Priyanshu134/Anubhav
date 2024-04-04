import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from "../utils/apiError.js";
import User from "../models/user.model.js";
import { ApiResponse } from "../utils/apiResponse.js";

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });
        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, "Error generating tokens");
    }
}

const registerUser = asyncHandler(async (req, res) => {
    // res.status(200).json({ message: "ok" });

    // user details
    const { firstName, email, phone, gender, dob, age, city, password, jobDescription } = req.body;
    // console.log(email);

    // validation 
    if (firstName == "" || email == "" || phone == "" || gender == "" || dob == "" || age == "" || city == "" || jobDescription == "" || password == "") {
        throw new ApiError(400, "All fields must be filled");
    }
    // can write more validation mesthods

    // if user alredy exist
    const existedUser = await User.findOne({
        $and: [{ phone }, { email }]
    });
    if (existedUser) throw new ApiError(409, "User already exists");

    // if images upload to cloudinary 
    // create user object, save user details
    const newUser = await User.create({
        firstName,
        email,
        phone,
        gender,
        dob,
        age,
        city,
        password,
        jobDescription
    })
    // remove password and refresh token field 
    const createdUser = await User.findById(newUser._id).select(
        "-password"
    );
    if (!createdUser) throw new ApiError(500, "user could not be registered");

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )
})

const loginUser = asyncHandler(async (req, res) => {
    // get user info from body
    const { email, password, firstName } = req.body;
    if (!email) throw new ApiError(400, "username or email not provided");
    // find user in the database
    // const user = await User.findOne({
    //     $or: [{ email }, { firstName }]
    // });
    const user = await User.findOne({ email });
    // if user is not found throw error
    if (!user) throw new ApiError(404, "user not found");
    // check if password is correct
    const isPasswordValid = await user.isPasswordCorrect(password || "");
    if (!isPasswordValid) throw new ApiError(401, "password is incorrect");
    // access and refresh token
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);
    // send cookie 
    const loggeInUser = await User.findById(user._id).
        select("-password -refreshToken")
    const options = {
        httpOnly: true,
        secure: true
    }
    return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(new ApiResponse(200, {
            user: loggeInUser, accessToken, refreshToken
        },
            "User logged in successfully!!"));
})

const logoutUser = asyncHandler(async (req, res) => {
    const id = req.user._id;
    await User.findByIdAndUpdate(id, {
        $set: { refreshToken: undefined }
    })
    const options = {
        httpOnly: true,
        secure: true
    }
    return res.status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "user logged out successfully!!"));
})

export { registerUser, loginUser, logoutUser };