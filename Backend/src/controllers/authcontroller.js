import dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';
import User from '../models/userModel';
import bcrypt from 'bcrypt';




const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    // console.log(req.body)
    if (!email || !password) {
        return res.status(400).json(error = "Please enter all the details correctly");
    }

    const foundUser = await User.findOne({ email });

    if (!foundUser) {
        return res.status(400).json(error = "User not found");
    }

    const correctPassword = await bcrypt.compare(password, foundUser.password);

    if (!correctPassword) return res.status(401).json(error = "Wrong password!");
    else {
        const accessToken = jwt.sign(
            { email: email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1d', algorithm: 'HS256' }
        );

        const refreshToken = jwt.sign(
            { email: foundUser.email },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '10d', algorithm: 'HS256' }
        );

        foundUser.refreshToken = refreshToken;
        await foundUser.save();

        res.cookie('jwt', refreshToken, { maxAge: 10 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'none', path: '/', secure: true }); // secure: true,
        foundUser.password = undefined;
        foundUser.refreshToken = undefined;
        return res.json({ foundUser, accessToken });
    }
}

const handleRegister = async (req, res) => {
    const { fullName, email, phone, gender, dob, city,  password, employmentStatus, jobDescription } = req.body;
    if (!fullName, email, phone, gender, dob, city,  password, employmentStatus, jobDescription) {
        res.status(400).json(error = "Please enter all the details correctly");
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
        fullName,
        email,
        phone,
        gender,
        dob,
        city,
        password,
        employmentStatus,
        jobDescription
    });

    try {
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(409).json(error = "User already exists");
    }
}

export default { handleLogin, handleRegister };
