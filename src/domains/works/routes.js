import express from "express";
import controller from "./controller.js";

const worksRouter = express.Router();

worksRouter.post("/", controller.createWorks);
worksRouter.get("/", controller.getAllWorks);
worksRouter.get("/:id", controller.getWorksById);
worksRouter.patch("/:id", controller.updateWorks);
worksRouter.delete("/:id", controller.deleteWorks);

export default worksRouter;
