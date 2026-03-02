import express from "express";
import controller from "./controller.js";

const worksRouter = express.Router();

// worksRouter.post("/", controller.createAbout);
worksRouter.get("/", controller.getAllWorks);
// worksRouter.get("/:id", controller.getAboutById);
// worksRouter.patch("/:id", controller.updateAbout);
// worksRouter.delete("/:id", controller.deleteAbout);

export default worksRouter;
