import express from "express";
import contactController from "../controllers/contactController.js";
const router = express.Router();
import homeController from "../controllers/homeController.js";
import servicesController from "../controllers/servicesController.js";
import skillController from "../controllers/skillController.js";

router.get("/", homeController);
router.get("/services", servicesController);
router.get("/skill", skillController);
router.get("/contact", contactController);

export default router;
