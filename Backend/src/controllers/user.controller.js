import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from "../utils/apiError.js";
import User from "../models/user.model.js";
import { ApiResponse } from "../utils/apiResponse.js";

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

export { registerUser };