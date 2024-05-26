import { Router } from "express";
import formController from "../controller/form.controller";

const router = Router();

router.post("/form", formController.createUser.bind(formController));
router.post("/fill_data", formController.createUserRecord.bind(formController));
router.get("/fill_data", formController.getAllUserRecord.bind(formController));

export default router;
