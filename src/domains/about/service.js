import { errorHandler } from "../../utils/responseHandler.js";
import { createAboutDto, updateAboutDto } from "./dto.js";
import repository from "./repository.js";

const createAbout = async (payload) => {
  const { error, value } = createAboutDto.validate(payload);
  if (error) {
    return errorHandler(res, { statusCode: 400, message: error.message });
  }

  return await repository.createAbout(value);
};

const getAllAbout = async () => {
  return await repository.getAllAbout();
};

const getAboutById = async (id, res) => {
  const about = await repository.getAboutById(id);
  if (!about) {
    return errorHandler(res, { statusCode: 404, message: "About not found" });
  }
  return about;
};

const updateAbout = async (id, payload) => {
  const { error, value } = updateAboutDto.validate(payload, {
    stripUnknown: true,
  });
  if (error) {
    return errorHandler(res, { statusCode: 400, message: error.message });
  }

  const updated = await repository.updateAbout(id, value);
  if (!updated) throw new Error("About not found");

  return updated;
};

const deleteAbout = async (id, res) => {
  const deleted = await repository.deleteAbout(id);
  if (!deleted) {
    return errorHandler(res, { statusCode: 404, message: "About not found" });
  }

  return true;
};

export default {
  createAbout,
  getAllAbout,
  getAboutById,
  updateAbout,
  deleteAbout,
};
