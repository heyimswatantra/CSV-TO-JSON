import { Router } from "express";
import { createTable } from "../controllers/create_table.controller.js"

const router = Router();

router.get("/", createTable)


export default router;