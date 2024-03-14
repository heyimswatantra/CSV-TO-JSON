import { Router } from "express";
import { processCsv } from "../controllers/process_csv.controller.js"

const router = Router();

router.get("/", processCsv)


export default router;