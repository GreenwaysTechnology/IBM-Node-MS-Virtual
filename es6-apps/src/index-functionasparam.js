//a =x
//b =y
function add(a, b) {
      console.log(a + b);
}
add(10, 10);
let x = 10;
let y = 90;
add(x, y);
//function passed as parameter to another function
//connection = dbConnection
function connect(connection) {
      //invoke function
      connection();
}
//variable anonmous function
let dbConnection = function () {
      console.log('db connection');
};
connect(dbConnection);
//inline anonmous 
connect(function () {
      console.log('NOSQL connection');
});