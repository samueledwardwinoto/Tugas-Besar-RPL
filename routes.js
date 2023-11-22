import express from "express";

import { home } from "./src/controllers/controller.js";

const router = express.Router();
router.get("/", home);

export default router;