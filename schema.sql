-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect bamazon_db --
USE bamazon_db;

-- Creates the table "products" within bamazon_db --
CREATE TABLE products (
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30),
department_name VARCHAR(30),
price INT(10),
stock_quantity INT(10),
PRIMARY KEY(item_id)
);
-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Scarf", "Clothing", 20, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cardigan", "Clothing", 30, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dress", "Clothing", 50, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shirt", "Clothing", 25, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Necklace", "Jewelry", 15, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Earrings", "Jewelry", 10, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rings", "Jewelry", 5, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nail_Polish", "Cosmetics", 5, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nail_Polish_Remover", "Cosmetics", 5, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Perfume", "Cosmetics", 50, 20); 



