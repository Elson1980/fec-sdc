DROP TABLE IF EXISTS poeple;
DROP TABLE IF EXISTS menu3;
DROP TABLE IF EXISTS menu2;
DROP TABLE IF EXISTS menu1;
DROP TABLE IF EXISTS product CASCADE;

DROP TABLE IF EXISTS sku CASCADE;

DROP TABLE IF EXISTS features CASCADE;

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    category TEXT NOT NULL
);

CREATE TABLE sku (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    msrp NUMERIC NOT NULL,
    color TEXT,
    size TEXT,
    img_1_URL TEXT,
    img_2_URL TEXT,
    img_3_URL TEXT,
    img_4_URL TEXT,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE
);

CREATE TABLE features (
    id SERIAL PRIMARY KEY,
    feature text NOT NULL,
    product_id int,
    --Foreign Key referencing the product table did not work
    FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE
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

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Tops', 11, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Bottoms', 11, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Activewear', 11, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Basics', 11, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Jackets & Coats', 11, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Loungewear & Sleepwear', 11, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Swimwear', 11, 'menu3');


INSERT INTO menu2 (name, parent, menuNum) VALUES ('Shoes', 2, 'menu2');

INSERT INTO Menu3 (name, parent, menuNum) VALUES ('Mens Athletic Shoes', 12, 'menu3');
INSERT INTO Menu3 (name, parent, menuNum) VALUES ('Mens Casual Shoes', 12, 'menu3');
INSERT INTO Menu3 (name, parent, menuNum) VALUES ('Mens Sandles', 12, 'menu3');
INSERT INTO Menu3 (name, parent, menuNum) VALUES ('Mens Hiking and Outdoor Shoes', 12, 'menu3');
INSERT INTO Menu3 (name, parent, menuNum) VALUES ('Mens Casual Sneakers', 12, 'menu3');
INSERT INTO Menu3 (name, parent, menuNum) VALUES ('Mens Boots', 12, 'menu3');
INSERT INTO Menu3 (name, parent, menuNum) VALUES ('Mens Athletic Slip On Shoes', 12, 'menu3');
INSERT INTO Menu3 (name, parent, menuNum) VALUES ('Mens Slippers', 12, 'menu3');
INSERT INTO Menu3 (name, parent, menuNum) VALUES ('Mens Dress Shoes', 12, 'menu3');
INSERT INTO Menu3 (name, parent, menuNum) VALUES ('Mens Tactical & Work Shoes', 12, 'menu3');


INSERT INTO menu2 (name, parent, menuNum) VALUES ('Watches', 2, 'menu2');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Sunglasses', 2, 'menu2');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Jewelry', 2, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Rings', 15, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Bracelets', 15, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Necklaces', 15, 'menu3');


INSERT INTO menu1 (name, menuNum) VALUES ('Womens', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Apparel', 3, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Tops', 16, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Bottoms', 16, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Intimate Apparel', 16, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Activewear', 16, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Pajamas & Activewear', 16, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Maternity', 16, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Jackets & Coats', 16, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Swimwear', 16, 'menu3');


INSERT INTO menu2 (name, parent, menuNum) VALUES ('Shoes', 3, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Athletic Shoes', 17, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Sandles', 17, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Sneakers', 17, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Slippers', 17, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Flats', 17, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Boots', 17, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Hiking and Outdoor Shoes', 17, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Atletic Shoes', 17, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Heels & Pumps', 17, 'menu3');


INSERT INTO menu2 (name, parent, menuNum) VALUES ('Handbags', 3, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Wallets & Wristlets', 18, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Crossbody & Messenger Bags', 18, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Totes', 18, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Fashion Backpacks', 18, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Satchels', 18, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Travel Bags', 18, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Shoulder Bags', 18, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Bucket & Hobo Bags', 18, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Belt Bags', 18, 'menu3');


INSERT INTO menu2 (name, parent, menuNum) VALUES ('Jewelry', 3, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Fashion Jewelry', 19, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Fine Jewelry', 19, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Necklaces', 19, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Earrings', 19, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Rings', 19, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Diamond & Bridal Fine Jewelry', 19, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Braclets', 19, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Jewelry', 19, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Kids Jewelry', 19, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Jewelry Sets', 19, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('jewelry Boxes', 19, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Anklets', 19, 'menu3');


INSERT INTO menu2 (name, parent, menuNum) VALUES ('Watches', 3, 'menu2');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Sunglassess', 3, 'menu2');


INSERT INTO menu1 (name, menuNum) VALUES ('Kids', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Apparel', 4, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Girls Clothing', 22, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Boys Clothing', 22, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Kids Activewear', 22, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Kids Swimwear', 22, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Kids Sleepwear', 22, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Kids Outerwear', 22, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Kids Basics', 22, 'menu3');


INSERT INTO menu2 (name, parent, menuNum) VALUES ('Shoes', 4, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Boys Shoes', 23, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Girls Shoes', 23, 'menu3');


INSERT INTO menu1 (name, menuNum) VALUES ('Baby', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Baby Apparel', 5, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Baby Girls Clothing', 24, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Baby Boys Clothing', 24, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Baby Accessories', 24, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Baby Jackets & Outerwear', 24, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Baby Sleepwear', 24, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Neutral Baby Clothing', 24, 'menu3');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Baby Gifts & Shower Favorites', 5, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Baby Shower Gifts', 25, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Baby Registry Favorites', 24, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Baby Blankets', 24, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Baby Early Learning', 24, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Kids Jewelry', 24, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Stroller & Car Seat Toys', 24, 'menu3');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Baby Proofing & Safety', 5, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Baby Proofing', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Baby Gates', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Step Stools', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Shopping Cart Covers', 26, 'menu3');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Essentials', 5, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Bedding & Decor', 27, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Nursing & Feeding', 27, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Diapering & Potty', 27, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Diaper & Storage Bags', 27, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Baby Proofing & Safety', 27, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Pacifiers, Rattles, Teething & Paci Accessories', 27, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Bathing', 27, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Baby Toiletries', 27, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Grooming & First Aid', 27, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Swaddles & Wearable Blankets', 27, 'menu3');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Furniture', 5, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Kids Furniture', 28, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Cribs', 28, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Dressers, Changers & Storage', 28, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Conversion Kits', 28, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Bassinets & Portable  Beds', 28, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Toddler Beds', 28, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mattresses', 28, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Gliders & Recliners', 28, 'menu3');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Gear', 5, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Activity Gear & Toys', 29, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Strollers', 29, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Car Seats', 29, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Diaper and Storage Bags', 29, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Playards & Portable Beds', 29, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('High Chairs', 29, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Baby Monitors & Soothers', 29, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Travel Solutions', 29, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Carriers', 29, 'menu3');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Maternity Apparel', 5, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Maternity Tops', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Maternity Bottoms', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Maternity Bras', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Maternity Dressers, Jumpsuits, Rompers', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Maternity Panties', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Maternity Accessories', 26, 'menu3');


INSERT INTO menu1 (name, menuNum) VALUES ('Accessories', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Handbags', 6, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Wallets & Wristlets', 31, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Crossbody & Messanger Bags', 31, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Totes', 31, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Fashion Backpacks', 31, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Satchels', 31, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Travel Bags', 31, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Shoulder Bags', 31, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Bucket & Hobo Bags', 31, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Belt Bags', 31, 'menu3');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Jewelry', 6, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Fashion Jewelry', 32, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Fine Jewelry', 32, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Necklaces', 32, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Earrings', 32, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Rings', 32, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Diamond & Bridal Fine Jewelry', 32, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Braclets', 32, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Jewelry', 32, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Kids Jewelry', 32, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Jewelry Sales', 32, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Jewelry Boxes', 32, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Anklets', 32, 'menu3');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Watches', 6, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Watches', 33, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Watches', 33, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Smartwatches', 33, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Kids Watches & Clocks', 33, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Accessories', 33, 'menu3');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Sunglasses', 6, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Sunglasses', 34, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Sunglasses', 34, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Unisex Sunglasses', 34, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Sunglasses Cases & Accessories', 34, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Kids Sunglasses', 34, 'menu3');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Backpacks', 6, 'menu2');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Kids Backpacks', 35, 'menu3');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Face Masks', 6, 'menu2');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Hats', 6, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Hats & Beanies', 37, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Kids Hats & Beanies', 37, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens hats & Beanies', 37, 'menu3');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Belts', 6, 'menu2'); 

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Mens Accessories', 6, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Hats & Beanies', 39, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Belts', 39, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Wallets', 39, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Cold Weather Accessories', 39, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Gifts', 39, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Bags & Backpacks', 39, 'menu3');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Cold Weather Accessories', 6, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Womens Cold Weather Accessories', 40, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Kids Cold Weather Accessories', 40, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Cold Weather Accessories', 40, 'menu3');


INSERT INTO menu1 (name, menuNum) VALUES ('Shoes', 'menu1');

INSERT INTO menu2 (name, parent, menuNum) VALUES ('Mens Shoes', 7, 'menu2');

INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Athletic Shoes', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Casual Shoes', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Sandles', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Hiking and Outdoor Shoes', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Casual Sneakers', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Boots', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Athletic Slides', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Slip On Shoes', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Slippers', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Dress Shoes', 26, 'menu3');
INSERT INTO menu3 (name, parent, menuNum) VALUES ('Mens Tactical & Work Shoes', 26, 'menu3');


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
INSERT INTO
    product (name, brand, category)
VALUES
    (
        'Apple 12.9 iPad Pro,(5th Gen) M1 Chip, Wi-Fi',
        'Apple',
        'IPad, Tablets, & Ereaders'
    );

INSERT INTO
    sku (
        description,
        msrp,
        color,
        size,
        img_1_URL,
        product_id
    )
VALUES
    (
        '2TB Space Gray',
        2399,
        'Space Gray',
        '2TB',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202104?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617126613000',
        1
    );

INSERT INTO
    features (feature, product_id)
VALUES
    ('test', 1);

--How do I implement a Foreign Key??  
-- INSERT INTO features (product_feature, product_id) VALUES 
-- ('Apple M1 chip for next-level performance', 1),
-- ('Brilliant 12.9-inch Liquid Retina XDR display with ProMotion, True Tone, and P3 wide color', 1),
-- ('TrueDepth camera system featuring Ultra Wide front camera with Center Stage', 1),
-- ('12MP Wide camera, 10MP Ultra Wide camera, and LiDAR Scanner for immersive AR', 1),
-- ('Stay connected with ultrafast Wi-Fi 6', 1),
-- ('Go further with all-day battery life', 1),
-- ('Face ID for secure authentication and Apple Pay', 1),
-- ('Four speaker audio and five studio-quality microphones', 1),
-- ('Support for Apple Pencil (2nd generation), Magic Keyboard, and Smart Keyboard Folio', 1),
-- ('iPadOS is powerful, intuitive, and designed specifically for iPad', 1),
-- ('Over a million apps on the App Store just for iPad', 1),
-- ('Screen Resolution: 2732 x 2048', 1),
-- ('Processor Model: Apple M1 chip, 16-core Neural Engine', 1),
-- ('Total Storage Capacity: 128 gigabytes', 1),
-- ('System Memory (RAM): 8 gigabytes', 1),
-- ('Operating System: Apple iPadOS', 1),
-- ('Voice Assistant Built-in: Siri', 1),
-- ('Internet Connectivity: Wi-Fi', 1),
-- ('Battery Type: Lithium-polymer', 1),
-- ('Security Features: Facial recognition, Password Protection', 1),
-- ('Display Type: LED', 1),
-- ('Screen Type: Retina Display', 1),
-- ('Bluetooth Version: 5.0', 1),
-- ('GPS Enabled', 1),
-- ('Interface(s): USB Type C', 1),
-- ('Front Facing Camera Megapixels: 12 megapixels', 1),
-- ('Front Facing Camera Video Resolution: 1080p', 1),
-- ('Rear Facing Camera Megapixels: 12 megapixels', 1),
-- ('Rear Facing Camera Video Resolution: 4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps', 1),
-- ('Product Height: 11.04 inches', 1),
-- ('Product Width: 8.46 inches', 1),
-- ('Product Depth: 0.25 inches', 1),
-- ('Product Weight: 24.1 ounces', 1),
-- ('Model Number MHNG3LL/A', 1);
