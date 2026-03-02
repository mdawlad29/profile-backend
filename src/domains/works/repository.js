import db from "../../configs/db.js";

const getAllWorks = async () => {
  const { rows } = await db.query(
    "SELECT * FROM works ORDER BY created_at DESC",
  );
  return rows;
};

export default { getAllWorks };
