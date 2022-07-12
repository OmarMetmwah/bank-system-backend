-- CREATE TABLE
CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    sender VARCHAR(50) NOT NULL REFERENCES customers("name"),
    reciever VARCHAR(50) NOT NULL REFERENCES customers("name"),
    timing TIMESTAMP,
    amount INTEGER
)