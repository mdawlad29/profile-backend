import repository from "./repository.js";

const getAllWorks = async () => {
  return await repository.getAllWorks();
};

export default { getAllWorks };
