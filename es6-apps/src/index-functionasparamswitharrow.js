let connect = connection => {
      //invoke function
      let isConnected = connection('Connection is Up!');
      isConnected ? console.log('Connected') : console.log('Not Connected!');
};
//variable anonmous function
let dbConnection = status => {
      console.log(status);
      return true;
};
connect(dbConnection);
//inline anonmous 
connect(status => {
      console.log(`NoSQL ${status}`);
      return true;
});