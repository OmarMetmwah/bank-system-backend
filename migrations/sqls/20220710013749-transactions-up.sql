-- CREATE TABLE
CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    sender VARCHAR(50) NOT NULL REFERENCES customers("name"),
    reciever VARCHAR(50) NOT NULL REFERENCES customers("name"),
    timing TIMESTAMP,
    amount INTEGER
)