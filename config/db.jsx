import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "enter your db password here",
  database: "enter your db name here",
});

try {
  const connection = await db.getConnection();
  console.log("Database connected successfully.");
  connection.release(); // important to release back to pool
} catch (err) {
  console.error("Database connection failed", err);
  process.exit(1); // optional: stop server if DB is essential
}
