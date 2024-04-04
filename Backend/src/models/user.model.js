import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        required: true,
    },

});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    const match = bcrypt.compare(password, this.password);
    if (match) return true;
    return false;
};

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id, //from db
            email: this.email,
            userName: this.userName,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
};

userSchema.methods.generateRefreshToken = async function () {
    return jwt.sign(
        {
            _id: this._id, //from db
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
};

const User = mongoose.model('User', userSchema);

export default User;

