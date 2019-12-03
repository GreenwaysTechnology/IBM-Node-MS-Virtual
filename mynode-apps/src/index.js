//async and await keywords

async function startFlow() {
      //promise
      try {
            /* let fakeUser = {
                  name: 'subramanain'
            } */
            let fakeUser;
            let promise = fakeUser ? Promise.resolve(fakeUser) : Promise.reject({
                  err: 'Something went wrong'
            });
            let result = await promise; //await keyword passes the current execution in background ,once success , it result result
            console.log(result);
      } catch (err) {
            console.log(err);
      }
}
startFlow();