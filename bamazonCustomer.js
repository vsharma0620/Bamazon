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
      console.log(res);
  inquirer 
    .prompt({
      name: "productID",
      type: "rawlist",
      message: "Which product would you like to buy?",
      choices: ["Scarf", "Cardigan", "Dress", "Shirt", "Necklace,", "Earrings", "Rings", "Nail_Polish", "Nail_Polish_Remover", "Perfume"]
    })
    .then(function(answer) {
    inquirer 
    .prompt({
        name: "Quantity",
        type: "rawlist",
        message: "How many units would you like to buy?",
        choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].stock_quantity);
            }
            return choiceArray;
          },
      });
    });
connection.end();
});
}