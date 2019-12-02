//scope: block scope : let vs var.
/* 
function isValid(token) {

      if (token) {
            //block level variables
            var message = 'Token is Present'
      } else {
            //block level variables
            var errMessage = 'Token not Present';
      }

      console.log(message, errMessage);
}

isValid();

 */



function isValid(token) {

      if (token) {
            //block level variables
            let message = 'Token is Present'
      } else {
            //block level variables
            let errMessage = 'Token not Present';
      }

      console.log(message, errMessage);
}
isValid();