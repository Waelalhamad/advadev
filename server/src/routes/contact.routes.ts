import { Router } from "express";
import { submitContactForm } from "../controllers/contact.controller";
import { validateContactForm } from "../middleware/validation.middleware";

const router = Router();

// POST /api/contact - Submit contact form
router.post("/", validateContactForm, submitContactForm);

export default router;
