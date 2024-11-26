import express from "express";
import { logout, signin, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { updateProfilePic } from "../controllers/auth.controller.js";
import { checkAuth } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup",signup)

router.post("/signin",signin)

router.post("/logout",logout)

router.put("/update-profile", protectRoute, updateProfilePic);

router.get("/check", protectRoute, checkAuth);

export default router;