//function passed as parameter to another function
//connection = dbConnection
function connect(connection) {
      //invoke function
      let isConnected = connection('Connection is Up!');
      isConnected ? console.log('Connected') : console.log('Not Connected!');
      isConnected
}
//variable anonmous function
let dbConnection = function (status) {
      console.log(status);
      return true;
};
connect(dbConnection);
//inline anonmous 
connect(function (status) {
      console.log(`NoSQL ${status}`);
      return true;
});