import { verifyJWT } from "../middlewares/auth.middleware.js"
import credentials from "../middlewares/credentials.js";
import { Router } from "express";
import { getProfile } from "../controllers/profile.controller.js"

const router = Router();
router.route("/").get(credentials, verifyJWT, getProfile);
// router.get('/profile', (req, res) => {
//   const userId = req.session.userId;
//   User.findById(userId)
//     .then(user => {
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
//       res.json(user);
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({ message: 'Server error' });
//     });
// });

export default router;