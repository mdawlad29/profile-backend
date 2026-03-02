import { errorHandler, successHandler } from "../../utils/responseHandler.js";
import service from "./service.js";

const createWorks = async (req, res) => {
  try {
    const result = await service.createWorks(req.body);
    return successHandler(res, {
      statusCode: 201,
      message: "Works created successfully",
      data: result,
    });
  } catch (error) {
    return errorHandler(res, { statusCode: 400, message: error.message });
  }
};

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

const getWorksById = async (req, res) => {
  try {
    const result = await service.getWorksById(req.params.id, res);
    return successHandler(res, {
      statusCode: 200,
      data: result,
      message: "Works found successfully",
    });
  } catch (error) {
    return errorHandler(res, { statusCode: 500, message: error.message });
  }
};

const updateWorks = async (req, res) => {
  try {
    const result = await service.updateWorks(req.params.id, req.body, res);
    return successHandler(res, {
      statusCode: 200,
      data: result,
      message: "Works updated successfully",
    });
  } catch (error) {
    return errorHandler(res, { statusCode: 500, message: error.message });
  }
};

const deleteWorks = async (req, res) => {
  try {
    await service.deleteWorks(req.params.id, res);
    return successHandler(res, {
      statusCode: 200,
      message: "Works deleted successfully",
    });
  } catch (error) {
    return errorHandler(res, { statusCode: 500, message: error.message });
  }
};

export default {
  createWorks,
  getAllWorks,
  getWorksById,
  updateWorks,
  deleteWorks,
};
