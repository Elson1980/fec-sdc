DROP TABLE IF EXISTS poeple;
DROP TABLE IF EXISTS menu3;
DROP TABLE IF EXISTS menu2;
DROP TABLE IF EXISTS menu1;

CREATE TABLE people (
    person_id SERIAL PRIMARY KEY,
    person_name text NOT NULL,
    person_date date NOT NULL
);

CREATE TABLE menu1 (
    id SERIAL PRIMARY KEY,
    name TEXT,
    menuNum TEXT
);

CREATE TABLE menu2 (
    id SERIAL PRIMARY KEY,
    name TEXT,
    parent INTEGER,
    FOREIGN KEY (parent) REFERENCES  menu1(id) ON DELETE CASCADE,
    menuNum TEXT
);

CREATE TABLE menu3 (
    id SERIAL PRIMARY KEY,
    name TEXT,
    parent INTEGER,
    FOREIGN KEY (parent) REFERENCES  menu2(id) ON DELETE CASCADE,
    menuNum TEXT
);


INSERT INTO menu1 (name, menuNum) VALUES ('Military', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Navy Uniforms', 1, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Uniforms', 1, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Uniforms', 1, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Insignia', 1, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Service Dress Uniforms', 1, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Navy Footwear', 1, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Service Uniforms', 1, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Working Uniforms', 1, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Formal & Dinner Dress Uniforms', 1, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Ribbons & Medals', 1, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Full Dress Uniforms', 1, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Caps & Covers', 1, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Uniform Accessories', 1, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Physical Training Uniforms (PTU)', 1, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Bodywear', 1, 'menu3');


INSERT INTO menu2 (name, parent, menuNum) VALUES ('Navy Pride', 1, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Apparel', 2, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Gifts & Collectibles', 2, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Family Pride', 2, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Coins', 2, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Luggage', 2, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Headwear', 2, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Flags', 2, 'menu3');


INSERT INTO menu2 (name, parent, menuNum) VALUES ('Marine Corps Uniforms', 1, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Uniforms', 3, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Uniforms', 3, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Blue Dress Uniform', 3, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Service Dress Uniform', 3, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Ribbons & Medals', 3, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Combat Utility Uniform (MARPAT)', 3, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Uniform Accessories', 3, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Insignia', 3, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Caps & Covers', 3, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Physical Training Unifrom (PTU)', 3, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('T-Shirts, Briefs & Socks', 3, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Name Tapes', 3, 'menu3');


INSERT INTO menu2 (name, parent, menuNum) VALUES ('Marine Pride', 1, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Marine Apparel', 4, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Marine Family Pride', 4, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Marine Headwear', 4, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Marine Gifts & Collectibles', 4, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Marine Drinkware', 4, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Marine Patches, Stickers, Pins & Magnets', 4, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Marine Coins', 4, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Marine Veteran', 4, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('POW-MIA', 4, 'menu3');


INSERT INTO menu2 (name, parent, menuNum) VALUES ('Tactical', 1, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Tactical Bags & Accessories', 5, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Knives & Tools', 5, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Tactical Clothing', 5, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Portective Gear', 5, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Tactical Accessories', 5, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Tactical Lights' , 5, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Outdoor Electronics' , 5, 'menu3');


INSERT INTO menu2 (name, parent, menuNum) VALUES ('Army', 1, 'menu2');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Air Force', 1, 'menu2');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Coast Guard', 1, 'menu2');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Fleet Marine Force', 1, 'menu2');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Public Health Service', 1, 'menu2');



INSERT INTO menu1 (name, menuNum) VALUES ('Mens', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Apparel', 2, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Shoes', 2, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Watches', 2, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Sunglasses', 2, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Jewelry', 2, 'menu2');



INSERT INTO menu1 (name, menuNum) VALUES ('Womens', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Apparel', 3, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Shoes', 3, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Handbags', 3, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Jewelry', 3, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Watches', 3, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Sunglassess', 3, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Kids', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Apparel', 4, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Shoes', 4, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Baby', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Baby Apparel', 5, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Baby Gifts & Shower Favorites', 5, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Baby Proofing & Safety', 5, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Essentials', 5, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Furniture', 5, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Gear', 5, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Maternity Apparel', 5, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Accessories', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Handbags', 6, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Jewelry', 6, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Watches', 6, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Sunglasses', 6, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Backpacks', 6, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Face Masks', 6, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Hats', 6, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Belts', 6, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Mens Accessories', 6, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Cold Weather Accessories', 6, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Shoes', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Mens Shoes', 7, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Womens Shoes', 7, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Kids Shoes', 7, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Boys Shoes', 7, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Girls Shoes', 7, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Shoe Accessories', 7, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Beauty & Personal Care', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Makeup', 8, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Skin Care', 8, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Hair Care', 8, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Fragrance', 8, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Bath & Body', 8, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Deodorant & Antiperspirant', 8, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Hair Removal & Shave', 8, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Mens Grooming', 8, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Spa Essentials & Accessories', 8, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Gift & Value Sets', 8, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Nails', 8, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Electronics', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Computers & Tablets', 9, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Video Games', 9, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('TV & Video', 9, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Audio', 9, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Wearables', 9, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Cameras & Camcorders', 9, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Smart Home', 9, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Cellular Accessories', 9, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Outdoor Electronics', 9, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Home & Outdoor Living', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Kitchen', 10, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Bed & Bath', 10, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Furniture', 10, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Major Appliances', 10, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Dining & Entertaining', 10, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('General Housewares', 10, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Outdoor Living', 10, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Home Furnishings & Decor', 10, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Home Theater', 10, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Home Gym', 10, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Smart Home', 10, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Office Electronics', 10, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Sports, Fitness & Outdoors', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Sporting Goods', 11, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Vitamins & Supplements', 11, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Hydration', 11, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Tactical', 11, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Camping & Outdoor Gear', 11, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Athletic Shoes', 11, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Activewear', 11, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Fitness Trackers', 11, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Office & School Supplies', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Pens', 12, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('NoteBooks & Journals', 12, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Binders', 12, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Paper', 12, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Pencils', 12, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Office Organizers', 12, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('eWriters', 12, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Buy In Multi-Packs', 12, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Elementry School Supplies', 12, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Middle School Supplies', 12, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('High School Supplies', 12, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Lunch Time', 12, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Home Office', 12, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Backpacks', 12, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Luggage & Travel', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Carry On 18-22in', 13, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Med Suitcases 23-26in', 13, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Large Suitcases 27in+', 13, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Luggage Sets', 13, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Backpacks', 13, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Travel Bags & Accessories', 13, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Toiletry Bags', 13, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Wallets', 13, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Travel Size Essentials', 13, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Work & Office Travel', 13, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Toys', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Kids Electronics', 14, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Dolls & Action Figures', 14, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Early Learning', 14, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Baby Toys', 14, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Building Sets & Blocks', 14, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Riding Toys & Outdoor Play', 14, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Games & Puzzles', 14, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Arts & Crafts', 14, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Dress Up & Role Play', 14, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Planes, Trains and Automobiles', 14, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Action Figures & Playsets', 14, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Animal Toys', 14, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Science & Discovery Toys', 14, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Household Essentials', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Air Fresheners and Deodorizers', 15, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Cleaning Supplies', 15, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Dish Detergent', 15, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Disposable Tableware', 15, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Insect & Pest Control', 15, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Laundry', 15, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Paper & Plastic', 15, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Health & Wellness', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Cough, Cold & Flu', 16, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Allergy', 16, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Pain & Feveer', 16, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Digestive Health', 16, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Childrens Medicine', 16, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Vitamins and Supplements', 16, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('First Aid & Topical Treatments', 16, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Oral Care', 16, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Eye & Ear Care', 16, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Foot Cate', 16, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Feminine Products', 16, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Sexual Wellness', 16, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Incontinence', 16, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Home Health Care', 16, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Sun Care & Tanning', 16, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Smoking Cessation', 16, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Masks, Gloves & Hand Sanitizer', 16, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Pet', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Dog Supplies', 17, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Cat Supplies', 17, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Pet Food & Treats', 17, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Pet Cleaning & Floorcare', 17, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Flea & Tick', 17, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Food, Snacks & Candy', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Candy', 18, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Salty & Sweet Snacks', 18, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Soups, Broth & Chili', 18, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Pantry', 18, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Canned Meats', 18, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Healthy Snacks', 18, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Specialty Shops', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Social Safety', 19, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Brands Supporting Veterans', 19, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Brands You Love', 19, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('For The Planet', 19, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Spring Look Book', 19, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('NFL Shop', 19, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('A Better You', 19, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Made In USA', 19, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('PCS/Moving', 19, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Emergency Preparations', 19, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Wedding Gift Guide', 19, 'menu2');
INSERT INTO menu2 (name, parent, menuNum) VALUES ('Entertain At Home', 19, 'menu2');














INSERT INTO people (person_name, person_date) VALUES ('Hunter', '2022-05-06');