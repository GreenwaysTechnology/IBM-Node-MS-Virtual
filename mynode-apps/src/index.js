const getUser = () => {
      return new Promise((resolve, reject) => {
            let fakeuser = {
                  name: 'Subramanian'
            };
            if (fakeuser) {
                  setTimeout(() => {
                        resolve(fakeuser)
                  }, 2000);
            } else {
                  setTimeout(() => {
                        reject({
                              err: 'User not Available'
                        })
                  }, 2000);
            }
      });
};

const login = user => {
      return new Promise((resolve, reject) => {
            if (user.name === 'Subramanian') {
                  setTimeout(() => resolve({
                        loginsuccess: 'valid User'
                  }), 1000);
            } else {
                  setTimeout(() => reject({
                        err: 'Invaild User',
                        code: 400,
                  }), 1000);
            }
      });
}

const dashboard = () => {
      console.log('Welcome to Dash board');
};

console.log('start....')
getUser()
      .then(user => login(user))
      .then(() => dashboard())
      .catch(err => {
            console.log(err)
      })
      .finally(() => console.log('async operation is done'))

console.log('going on')