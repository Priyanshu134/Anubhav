import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from "../utils/apiError.js";
import User from "../models/user.model.js";
import Request from '../models/request.model.js';
import { ApiResponse } from "../utils/apiResponse.js";

const sendRequest = asyncHandler(async (req, res) => {
    try {
        const id = req.user._id;
        const { description } = req.body;
        const user = await User.findOne({ _id: id });

        if (!user) return res.status(404).json({ error: 'User not found.' });

        const existingRequest = await Request.findOne({ user: user, description: description });
        if (existingRequest) return res.status(400).json({ error: 'Request already exists for this user and description.' });

        const newRequest = await Request.create({
            user,
            description
        });

        // Return a success response
        return res.status(201).json({ message: 'Request sent successfully.', request: newRequest });
    } catch (error) {
        console.log("Error sending Request", error);
        // Return an error response if something goes wrong
        return res.status(500).json({ error: 'Internal server error.' });
    }
})

const getRequest = asyncHandler(async (req, res) => {
    try {
        const requests = await Request.find();
        // console.log(requests);
        if (requests.length == 0) {
            return res.status(404).json({ message: "No request found." });
        }
        // Return the requests found in the database
        return res.status(200).json({ requests: requests });

    } catch (error) {
        console.log("Error getting Requests", error);
        // Return an error response if something goes wrong
        return res.status(500).json({ error: 'Internal server error.' });
    }
});


export { sendRequest, getRequest };