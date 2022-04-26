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