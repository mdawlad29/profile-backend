import db from "../../configs/db.js";

const createWorks = async ({
  title,
  description,
  image,
  url,
  company_name,
  tag,
}) => {
  const query = `
    INSERT INTO works (title, description, image, url, company_name, tag)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

  const values = [
    title,
    description,
    image,
    url,
    company_name,
    JSON.stringify(tag),
  ];

  const { rows } = await db.query(query, values);
  return rows[0];
};

const getAllWorks = async () => {
  const { rows } = await db.query(
    "SELECT * FROM works ORDER BY created_at DESC",
  );
  return rows;
};

const getWorksById = async (id) => {
  const { rows } = await db.query("SELECT * FROM works WHERE id = $1", [id]);
  return rows[0];
};

const updatedWorks = async (id, fields) => {
  const keys = Object.keys(fields);
  if (keys.length === 0) return null;

  const values = keys.map((key) => {
    if (Array.isArray(fields[key])) {
      return JSON.stringify(fields[key]);
    }
    return fields[key];
  });

  const setQuery = keys
    .map((key, index) => `${key} = $${index + 1}`)
    .join(", ");

  values.push(id);

  const query = `
    UPDATE works
    SET ${setQuery}, updated_at = NOW()
    WHERE id = $${values.length}
    RETURNING *;
  `;

  const result = await db.query(query, values);
  if (!result.rows || result.rows.length === 0) return null;
  return result.rows[0];
};

const deleteWorks = async (id) => {
  const { rowCount } = await db.query("DELETE FROM works WHERE id = $1", [id]);
  return rowCount > 0;
};

export default {
  createWorks,
  getAllWorks,
  getWorksById,
  updatedWorks,
  deleteWorks,
};
