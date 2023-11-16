import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/es-SQL");

const setupDB = () => {
  db.none(`
    CREATE TABLE IF NOT EXISTS books (
        book_id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        genre TEXT NOT NULL,
        published_year INTEGER,
        isbn INTEGER,
        price FLOAT,
        rating FLOAT,
        stock_count INTEGER
    )
    `);
};

setupDB();
