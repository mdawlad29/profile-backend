import express from "express";
import controller from "./controller.js";

const aboutRouter = express.Router();

aboutRouter.post("/", controller.createAbout);
aboutRouter.get("/", controller.getAllAbout);
aboutRouter.get("/:id", controller.getAboutById);
aboutRouter.patch("/:id", controller.updateAbout);
aboutRouter.delete("/:id", controller.deleteAbout);

export default aboutRouter;
