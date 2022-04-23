DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS features;
DROP TABLE IF EXISTS legal;
DROP TABLE IF EXISTS ourpartners;
DROP TABLE IF EXISTS customerservice;

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    product_name text NOT NULL
);

CREATE TABLE features (
    id SERIAL PRIMARY KEY,
    feature text NOT NULL,
    --Foreign Key referencing the product table did not work
    product_id INTEGER,    
    FOREIGN KEY(product_id) REFERENCES product(id) ON DELETE CASCADE
);

CREATE TABLE legal (
    id SERIAL PRIMARY KEY,
    name text NOT NULL,    
    url text NOT NULL
);

CREATE TABLE ourpartners (
    id SERIAL PRIMARY KEY,
    name text NOT NULL,    
    url text NOT NULL
);

CREATE TABLE customerservice (
    id SERIAL PRIMARY KEY,
    name text NOT NULL,    
    url text NOT NULL
);


-- CREATE TABLE shipping (
--     id SERIAL PRIMARY KEY,
--     method text NOT NULL,
--     conusCost text NOT NULL,
--     oconusCost text NOT NULL,
--     conusDelivery text NOT NULL,
--     oconusDelivery text NOT NULL,
--     product_id INTEGER,    
--     FOREIGN KEY(product_id) REFERENCES product(id) ON DELETE CASCADE
-- );

INSERT INTO product (product_name) VALUES ('Ipad');

INSERT INTO features (feature, product_id) VALUES 
('Apple M1 chip for next-level performance', 1),
('Brilliant 12.9-inch Liquid Retina XDR display with ProMotion, True Tone, and P3 wide color', 1),
('TrueDepth camera system featuring Ultra Wide front camera with Center Stage', 1),
('12MP Wide camera, 10MP Ultra Wide camera, and LiDAR Scanner for immersive AR', 1),
('Stay connected with ultrafast Wi-Fi 6', 1),
('Go further with all-day battery life', 1),
('Face ID for secure authentication and Apple Pay', 1),
('Four speaker audio and five studio-quality microphones', 1),
('Support for Apple Pencil (2nd generation), Magic Keyboard, and Smart Keyboard Folio', 1),
('iPadOS is powerful, intuitive, and designed specifically for iPad', 1),
('Over a million apps on the App Store just for iPad', 1),
('Screen Resolution: 2732 x 2048', 1),
('Processor Model: Apple M1 chip, 16-core Neural Engine', 1),
('Total Storage Capacity: 128 gigabytes', 1),
('System Memory (RAM): 8 gigabytes', 1),
('Operating System: Apple iPadOS', 1),
('Voice Assistant Built-in: Siri', 1),
('Internet Connectivity: Wi-Fi', 1),
('Battery Type: Lithium-polymer', 1),
('Security Features: Facial recognition, Password Protection', 1),
('Display Type: LED', 1),
('Screen Type: Retina Display', 1),
('Bluetooth Version: 5.0', 1),
('GPS Enabled', 1),
('Interface(s): USB Type C', 1),
('Front Facing Camera Megapixels: 12 megapixels', 1),
('Front Facing Camera Video Resolution: 1080p', 1),
('Rear Facing Camera Megapixels: 12 megapixels', 1),
('Rear Facing Camera Video Resolution: 4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps', 1),
('Product Height: 11.04 inches', 1),
('Product Width: 8.46 inches', 1),
('Product Depth: 0.25 inches', 1),
('Product Weight: 24.1 ounces', 1),
('Model Number MHNG3LL/A', 1);

-- INSERT INTO shipping (method, conusCost, oconusCost, conusDelivery, oconusDelivery, product_id) VALUES 
-- ('Standard', '$4.95 FREE with Military Star Card of Purchase of $49.95 or more', '$$4.95 FREE with Military Star Card of Purchase of $49.95 or more', '5 - 7 Business Days', 'Up to 45 Business Days' 1),
-- ('Priority', '$12.95', 'N/A', '3 - 5 Business Days', 'N/A' 1),
-- ('Express', '$17.95', 'N/A', '1 - 2 Business Days', 'N/A'  1),
-- ('Ship to Store', 'Free Select Locations Only', 'Free Select Locations Only', 'N/A', 'N/A', 1),
-- ('Ship to Store CONUS', 'N/A', 'N/A', '3 - 5 Business Days Select locations only.', 'N/A', 1),
-- ('Ship to Store OCONUS', 'N/A', 'N/A', 'N/A', '7 - 10 Business Days Select locations only', 1);

INSERT INTO legal (name, url) VALUES 
('Site Map', 'https://www.mynavyexchange.com/nex/sitemap'),
('Privacy Policy', 'https://www.mynavyexchange.com/nex/privacy'),
('Contact Us', 'https://www.mynavyexchange.com/customerservice/contactUs.jsp'),
('508 Compliance', 'https://dodcio.defense.gov/DoDSection508/Std_Stmt.aspx'),
('FOIA', 'https://www.foiaonline.gov/foiaonline/action/public/request'),
('No Fear Act', 'https://www.secnav.navy.mil/donhr/Site/Pages/No-Fear-Act.aspx#');



INSERT INTO ourpartners (name, url) VALUES 
('Navy.com', 'https://www.navy.com/'),
('Navy.mil', 'https://www.navy.mil/'),
('NAVSUP', 'https://www.navsup.navy.mil/public/navsup/home'),
('Navy Lodge', 'https://www.navy-lodge.com"'),
('Navy Gateway Inns & Suites', 'https://www.mynavyexchange.com/nex/enterprise-info/our-seven-business-lines/ngis'),
('Military Star Card', 'https://www.myecp.com/CustomerAds/Page/Navy'),
('Network Solutions', 'https://seals.networksolutions.com/siteseal_seek/steseal?v_shortname=NETSB&v_querytype=W&v_search=www.mynavyexchange.com&x=5&y=5'),
('USA.gov', 'https://www.usa.gov/');


INSERT INTO customerservice (name, url) VALUES 
('Work For Us', 'https://www.mynavyexchange.com/nex/work-for-us'),
('Doing Business With Us', 'https://www.mynavyexchange.com/nex/doing-business-with-us'),
('NEXt Level Rewards', 'https://www.mynavyexchange.com/NEXtLevelRewards'),
('Take A Survey', 'https://www.mynavyexchange.com/take-a-survey'),
('FAQ', 'https://www.mynavyexchange.com/nex/faqs"'),
('NEXCOM Enterprise Information', 'https://www.mynavyexchange.com/nex/enterprise-info');