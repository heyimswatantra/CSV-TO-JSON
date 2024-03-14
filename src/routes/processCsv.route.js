import { Router } from "express";
import { processCsv } from "../controllers/process_csv.controller.js"

const router = Router();

router.post("/", processCsv)


export default router;