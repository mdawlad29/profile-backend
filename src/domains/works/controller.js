import { errorHandler, successHandler } from "../../utils/responseHandler.js";
import service from "./service.js";

const getAllWorks = async (req, res) => {
  try {
    const result = await service.getAllWorks();
    return successHandler(res, {
      statusCode: 200,
      data: result,
      message: "Works found successfully",
    });
  } catch (error) {
    return errorHandler(res, { statusCode: 500, message: error.message });
  }
};

export default { getAllWorks };
