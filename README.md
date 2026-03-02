# AWLAD Profile Backend

A **Node.js REST API** for managing profile content (`about` and `works`) using **PostgreSQL**, **Express**, and **Joi validation**. Supports **JSONB tags**, **CRUD operations**, and **partial updates**.

---

## 🧰 Tech Stack

- Node.js v18+
- Express.js
- PostgreSQL
- pg (PostgreSQL client)
- Joi (request validation)
- dotenv (environment variables)

---

## 🚀 Features

- **About Module**
  - Create, read, update, delete “about” entries
  - Fields: `title`, `description`, `image`
  - Partial update supported

- **Works Module**
  - Create, read, update, delete “works” entries
  - Fields: `title`, `description`, `image`, `url`, `company_name`, `tag`
  - `tag` stored as **JSONB** (can store JS arrays like `["react", "next"]`)
  - Partial update supported

- **Global Features**
  - Validation using **Joi**
  - Centralized error handler
  - 404 route handling
  - Database connection check on startup

---

## ⚡ Installation

1. Clone the repo:

```bash
git clone https://github.com/mdawlad29/profile-backend.git
cd profile-backend
npm install
npm run start
```
