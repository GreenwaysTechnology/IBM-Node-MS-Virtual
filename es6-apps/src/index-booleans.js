//booelans : true /false
let isActive = true;
console.log(`isActive ${isActive}`);

//decision making
if (isActive) {
      console.log('Active')
} else {
      console.log('In Active');
}
isActive ? console.log('Active') : console.log('In Active')
//booleans
/**
 * Truthy values:
 *  In javascript everything is true execpt the following values
 * 
 * fasly values
 *  1.boolean false
 *  2.Empty string "" ,''
 *  3.0
 *  4.undefined
 *  5.NaN
 *  6.null
 */
//let firstName = 'Subramanain';
let firstName = '';
if (firstName) {
      console.log(`The first Name ${firstName}`);
} else {
      console.log('No first Name')
}