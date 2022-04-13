DROP TABLE IF EXISTS poeple;

CREATE TABLE people (
    person_id SERIAL PRIMARY KEY,
    person_name text NOT NULL,
    person_date date NOT NULL
);
INSERT INTO people (person_name, person_date) VALUES ('Hunter', '2022-05-06');