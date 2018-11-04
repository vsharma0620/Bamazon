var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Bruno123.",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to print all items
  start();
});

function start() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);

      promtCustomerForItem(res);
    });
  }

  function promtCustomerForItem (inventory) {
  
  inquirer 
    .prompt([
      {
      name: "productID",
      type: "input",
      message: "Which product would you like to buy? [Quit with Q]",
      validate: function(val) {
        return !isNaN(val) || val.toLowerCase() === "q"; 
      }
      }
    ])
      // choices: ["Scarf", "Cardigan", "Dress", "Shirt", "Necklace,", "Earrings", "Rings", "Nail_Polish", "Nail_Polish_Remover", "Perfume"
    .then(function(val) {
      exit(val.productID);
      var choiceID =
      parseInt(val.productID);
      var product =
      checkInventory(choiceID, inventory);

      if (product) {
        quanitityPrompt(product); 
      }
      else {
        console.log("\nThat item is not in stock.");
        loadProducts();
      }
    });
  }

  function quanitityPrompt(product) {

    inquirer 
    .prompt([
      {
        name: "Quantity",
        type: "input",
        message: "How many units would you like to buy? [Quite with Q]",
        validate: function(val) {
          return cal > 0 ||
          val.toLowerCase() === "q";
        }
        }
      ])
      .then(function(val) {
        exit(val.Quanitity);
        var Quanitity = parseInt(val.Quanitity);
      if (Quanitity > product.stock_Quantity) {
        console.log("\nInsufficient Quantity!");
        loadProducts();
      }
      else {
        makePurchase(product, Quanitity);
      }
    });
  }

  function makePurchase(product, Quanitity)
  {
    connection.query(
      "UPDATE products SET ? WHERE ?",
      [{stock_Quantity: Quanitity},
      {item_id: product.item_id}],
      function(err, res) {
        console.log('RES AFTER PURCHASE:', res)
        console.log("\nSuccessfully purchased " + Quanitity + " " + product.product_name + "'s!");
        loadProducts();
      }
    );
  }

  function checkInventory(choiceID, inventory) {
    for (var i = 0; i < inventory.length; i++) {
      if (inventory[i].item_id === choiceId) {
        // If a matching product is found, return the product
        return inventory[i];
      }
    }
    // Otherwise return null
    return null;
  }
  
  // Check to see if the user wants to quit the program
  function checkIfShouldExit(choice) {
    if (choice.toLowerCase() === "q") {
      // Log a message and exit the current node process
      console.log("Goodbye!");
      process.exit(0);
    }
  }
  
