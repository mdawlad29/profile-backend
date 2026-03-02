import db from "../../configs/db.js";

const createAbout = async ({ title, description, image }) => {
  const query = `
    INSERT INTO about (title, description, image)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [title, description, image];

  const { rows } = await db.query(query, values);
  return rows[0];
};

const getAllAbout = async () => {
  const { rows } = await db.query(
    "SELECT * FROM about ORDER BY created_at DESC",
  );
  return rows;
};

const getAboutById = async (id) => {
  const { rows } = await db.query("SELECT * FROM about WHERE id = $1", [id]);
  return rows[0];
};

const updateAbout = async (id, fields) => {
  const keys = Object.keys(fields);
  if (keys.length === 0) return null;

  const setQuery = keys
    .map((key, index) => `${key} = $${index + 1}`)
    .join(", ");

  const values = Object.values(fields);

  values.push(id);

  const query = `
    UPDATE about
    SET ${setQuery}, updated_at = NOW()
    WHERE id = $${values.length}
    RETURNING *;
  `;

  const result = await db.query(query, values);
  if (!result.rows || result.rows.length === 0) return null;
  return result.rows[0];
};

const deleteAbout = async (id) => {
  const { rowCount } = await db.query("DELETE FROM about WHERE id = $1", [id]);
  return rowCount > 0;
};

export default {
  createAbout,
  getAllAbout,
  getAboutById,
  updateAbout,
  deleteAbout,
};
