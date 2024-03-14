import { Router } from "express";
import { getAgeDist } from "../controllers/age_distribution.controller.js"

const router = Router();

router.get("/", getAgeDist)


export default router;