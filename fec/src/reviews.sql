DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS author;



CREATE TABLE author (
    author_id SERIAL,

    author_name text NOT NULL,
    PRIMARY KEY(author_id)
    
)

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    author_r_name text,
    author_id INT,
    review_title text NOT NULL,
    review_date date NOT NULL,
    review_stars INT NOT NULL,
    review_body text NOT NULL,
    review_recommend BOOLEAN,
    review_helpful_yes INT,
    review_helpful_no INT,
    review_quality INT,
    review_value INT,

    CONSTRAINT fk_author
        FOREIGN KEY(author_id)
        REFERENCES author(author_id)
);
INSERT INTO author (author_name) VALUES ('Hunter');
INSERT INTO author (author_name) VALUES ('James');
INSERT INTO author (author_name) VALUES ('Albert');
INSERT INTO reviews (author_r_name, review_title, review_date, review_stars, review_body, review_recommend, review_helpful_yes, review_helpful_no, review_quality, review_value) VALUES ('test', 'GARBAGE', '2022-05-06', 5, 'this product sucks', 'false', 1, 2, 4, 4);
INSERT INTO reviews (author_r_name, review_title, review_date, review_stars, review_body, review_recommend, review_helpful_yes, review_helpful_no, review_quality, review_value) VALUES ('hunter', 'Not so bad', '2022-07-01', 4, 'is its what is tisss', 'true', 1, 0, 5, 5);
INSERT INTO reviews (author_r_name, review_title, review_date, review_stars, review_body, review_recommend, review_helpful_yes, review_helpful_no, review_quality, review_value) VALUES ('james', 'Amazing!', '2022-05-03', 5, 'Lovin it!', 'true', 3, 0, 5, 4);
INSERT INTO reviews (author_r_name, review_title, review_date, review_stars, review_body, review_recommend, review_helpful_yes, review_helpful_no, review_quality, review_value) VALUES ('vince', 'heeehhh!', '2022-01-03', 5, 'def meh!', 'true', 3, 0, 5, 4);
INSERT INTO reviews (author_r_name, review_title, review_date, review_stars, review_body, review_recommend, review_helpful_yes, review_helpful_no, review_quality, review_value) VALUES ('sam', 'Amazing!', '2022-05-03', 5, 'Lovin it!', 'true', 3, 0, 5, 4);
INSERT INTO reviews (author_r_name, review_title, review_date, review_stars, review_body, review_recommend, review_helpful_yes, review_helpful_no, review_quality, review_value) VALUES ('micheal', 'Amaasdfng!', '2022-05-03', 5, 'Lovin it!', 'true', 3, 0, 5, 4);
INSERT INTO reviews (author_r_name, review_title, review_date, review_stars, review_body, review_recommend, review_helpful_yes, review_helpful_no, review_quality, review_value) VALUES ('shaun', 'Amcccc!', '2022-05-03', 5, 'Lovin it!', 'true', 3, 0, 5, 4);
INSERT INTO reviews (author_r_name, review_title, review_date, review_stars, review_body, review_recommend, review_helpful_yes, review_helpful_no, review_quality, review_value) VALUES ('jay', 'bbbbb!', '2022-05-03', 5, 'Lovin it!', 'true', 3, 0, 5, 4);
INSERT INTO reviews (author_r_name, review_title, review_date, review_stars, review_body, review_recommend, review_helpful_yes, review_helpful_no, review_quality, review_value) VALUES ('lok', 'aaaaaaa!', '2022-05-03', 5, 'Lovin it!', 'true', 3, 0, 5, 4);
INSERT INTO reviews (author_r_name, review_title, review_date, review_stars, review_body, review_recommend, review_helpful_yes, review_helpful_no, review_quality, review_value) VALUES ('josh', 'goof', '2022-05-03', 5, 'Lovin it!', 'true', 3, 0, 5, 4);
