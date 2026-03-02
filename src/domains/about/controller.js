import { errorHandler, successHandler } from "../../utils/responseHandler.js";
import service from "./service.js";

const createAbout = async (req, res) => {
  try {
    const result = await service.createAbout(req.body);
    return successHandler(res, {
      statusCode: 201,
      message: "About created successfully",
      data: result,
    });
  } catch (error) {
    return errorHandler(res, { statusCode: 400, message: error.message });
  }
};

const getAllAbout = async (req, res) => {
  try {
    const result = await service.getAllAbout();
    return successHandler(res, {
      statusCode: 200,
      data: result,
      message: "About found successfully",
    });
  } catch (error) {
    return errorHandler(res, { statusCode: 500, message: error.message });
  }
};

const getAboutById = async (req, res) => {
  try {
    const result = await service.getAboutById(req.params.id, res);
    return successHandler(res, {
      statusCode: 200,
      data: result,
      message: "About found successfully",
    });
  } catch (error) {
    return errorHandler(res, { statusCode: 500, message: error.message });
  }
};

const updateAbout = async (req, res) => {
  try {
    const result = await service.updateAbout(req.params.id, req.body, res);
    return successHandler(res, {
      statusCode: 200,
      data: result,
      message: "About updated successfully",
    });
  } catch (error) {
    return errorHandler(res, { statusCode: 500, message: error.message });
  }
};

const deleteAbout = async (req, res) => {
  try {
    await service.deleteAbout(req.params.id, res);
    return successHandler(res, {
      statusCode: 200,
      message: "About deleted successfully",
    });
  } catch (error) {
    return errorHandler(res, { statusCode: 500, message: error.message });
  }
};

export default {
  createAbout,
  getAllAbout,
  getAboutById,
  updateAbout,
  deleteAbout,
};
