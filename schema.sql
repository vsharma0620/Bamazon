-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect bamazon_db --
USE bamazon_db;

-- Creates the table "products" within bamazon_db --
CREATE TABLE products (
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30)  NOT NULL,
department_name VARCHAR(30)  NOT NULL,
price DECIMAL(10,2)  NOT NULL,
stock_quantity INT(10)  NOT NULL,
PRIMARY KEY(item_id)
);

SELECT * FROM products;
-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Scarf", "Clothing", 20, 100),
 ("Cardigan", "Clothing", 30, 200),
("Dress", "Clothing", 50, 150),
 ("Shirt", "Clothing", 25, 200),
("Necklace", "Jewelry", 15, 40),
("Earrings", "Jewelry", 10, 30),
("Rings", "Jewelry", 5, 10),
("Nail_Polish", "Cosmetics", 5, 15),
("Nail_Polish_Remover", "Cosmetics", 5, 10),
("Perfume", "Cosmetics", 50, 20);



