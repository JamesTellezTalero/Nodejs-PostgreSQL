CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users(name, email) VALUES
    ('joe','joe@com'),
    ('joe','joe@com');