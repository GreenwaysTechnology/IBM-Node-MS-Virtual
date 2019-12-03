//

const getUser = () => {
      /*   let fakeUser = {
              name: 'Subramanian'
        }; */
      let fakeUser;
      if (fakeUser) {
            return Promise.resolve(fakeUser);
      } else {
            return Promise.reject({
                  err: 'No User found'
            });
      }
};
getUser()
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .finally(() => console.log('async operation is done'))