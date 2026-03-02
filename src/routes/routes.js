import express from "express";
import aboutRouter from "../domains/about/route.js";
import worksRouter from "../domains/works/routes.js";

const apiRouter = express.Router();

apiRouter.use("/about", aboutRouter);
apiRouter.use("/works", worksRouter);

export default apiRouter;
