import { errorHandler } from "../../utils/responseHandler.js";
import { createWorksDto, updateWorksDto } from "./dto.js";
import repository from "./repository.js";

const createWorks = async (payload) => {
  const { error, value } = createWorksDto.validate(payload);
  if (error)
    return errorHandler(res, { statusCode: 400, message: error.message });

  return await repository.createWorks(value);
};

const getAllWorks = async () => {
  return await repository.getAllWorks();
};

const getWorksById = async (id, res) => {
  const works = await repository.getWorksById(id);
  if (!works) {
    return errorHandler(res, { statusCode: 404, message: "Works not found" });
  }
  return works;
};

const updateWorks = async (id, payload, res) => {
  const { error, value } = updateWorksDto.validate(payload, {
    stripUnknown: true,
  });
  if (error) return errorHandler(res, { statusCode: 400, message: error });

  return await repository.updatedWorks(id, value);
};

const deleteWorks = async (id, res) => {
  const deleted = await repository.deleteWorks(id);
  if (!deleted) {
    return errorHandler(res, { statusCode: 404, message: "Works not found" });
  }

  return true;
};

export default {
  createWorks,
  getAllWorks,
  getWorksById,
  updateWorks,
  deleteWorks,
};
