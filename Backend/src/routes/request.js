import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { sendRequest, getRequest } from "../controllers/request.controller.js"

const router = Router();

// protected routes
router.route("/sendRequest").post(verifyJWT, sendRequest);
router.route("/getRequest").get(verifyJWT, getRequest);

export default router;