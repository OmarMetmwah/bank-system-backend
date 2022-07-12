-- CREATE TABLE
CREATE TABLE IF NOT EXISTS customers (
    "name" VARCHAR(50) NOT NULL UNIQUE PRIMARY KEY,
    email VARCHAR(50) UNIQUE,
    lastTransaction TIMESTAMP,
    currentBalance INTEGER NOT NULL,
    constraint balance_nonnegative check (currentBalance >= 0)
)