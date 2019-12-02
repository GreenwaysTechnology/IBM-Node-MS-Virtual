//
/* function getProduct(id, name) {
      return {
            id: id,
            name: name
      }
} */
//Short cuts
/* function getProduct(id, name) {

      /* return {
            //objectkey:localvariable ==same =>make it one
            id: id,
            name: name
      } */
/* return {
      id,
      name
} */
//}*/

const getProduct = (id, name) => ({
      id,
      name
});


let products = getProduct(1, 'Lenvo think Pad');
console.log(products)