var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "123abc",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id: ", connection.threadId);
  createProduct();
  updateProduct();
  deleteProduct();
  selectAll();
});

function selectAll() {
  connection.query("SELECT * from products", function(err, res) {
    if (err) throw err;
    console.log("result", res);
    var iceCream = res[0].flavor;
    console.log("first ice cream product", iceCream);
  });
}

function createProduct() {
  console.log("adding a new ice cream");
  var query = connection.query(
    "INSERT INTO products SET ?",
    {
      flavor: "Rocky Road",
      price: 3.0,
      quantity: 50
    },
    function(err, res) {
      console.log(res.affectedRows + " product inserted!");
    }
  );
}

function updateProduct() {
  console.log("Updating product");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        quantity: 100
      },
      {
        flavor: "Rocky Road"
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " products updated");
    }
  );
}

function deleteProduct() {
  console.log("deleting product");
  connection.query(
    "DELETE from products WHERE ?",
    {
      flavor: "Rocky Road"
    },
    function(err, res) {
      console.log(res.affectedRows + " products delete");
    }
  );
}