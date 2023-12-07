import express from "express";
import { formVisionController } from "../controllers/formVisionController";

const router = express.Router();

router.post("/formvision", formVisionController);

export default router;
