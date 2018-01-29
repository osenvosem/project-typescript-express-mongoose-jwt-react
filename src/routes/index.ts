import { Router } from "express";
import userRoutes from "./users";

const router = Router();

router.use("/users", userRoutes);

export default router;
