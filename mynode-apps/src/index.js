//Callback Hell : when you nest so many async calls, it will lead complexity with respect to code maintaince,debugging,lot of boiler plate code



//return data if available else return error message
const getUser = (success, failure) => {
      let fakeUser = {
            name: 'Subramanian'
      };
      // let fakeUser;
      //biz logic
      if (fakeUser) {
            setTimeout(() => success(fakeUser), 1000);
      } else {
            setTimeout(() => failure({
                  err: 'User data not Found!'
            }), 1000);
      }
};
const login = (user, success, failure) => {
      if (user.name === 'Subramanian') {
            setTimeout(() => success({
                  loginsuccess: 'valid User',
                  userName: user.name
            }), 1000);
      } else {
            setTimeout(() => failure({
                  err: 'Invaild User'
            }), 1000);
      }
}
const dashboard = user => {
      console.log(`Welcome to ${user}`);
}

//function as param
getUser(user => {
      login(user, isValidUser => {
            dashboard(isValidUser.userName)
      }, err => console.log(err))
}, err => {
      console.log(err)
});