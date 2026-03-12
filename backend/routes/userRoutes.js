import express from "express";
import { registerUser, loginUser, getProfile, getAllUsers, deleteUser ,logoutUser} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);
router.get("/allUser", protect, getAllUsers);
router.delete("/user/:id", protect, deleteUser);
router.post("/logout", logoutUser);

export default router;