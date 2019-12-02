//function as Object template

/* function Employee() {
      //data + methods
      this.id = 1;
      this.firstName = 'Divya Sree';
      this.lastName = 'Subramanian';
      //methods
      this.calculateSalary = function () {
            return 100 * 100;
      }
} */
//class
class Employee {
      //instance variables
      id = 1;
      firstName = 'Divya Sree';
      lastName = 'Subramanian';
      //methods
      /* calculateSalary = function () {
            return 100 * 100;
      } */
      /*  calculateSalary() {
             return 100 * 100;
       } */
      calculateSalary = () => {
            return 100 * 100;
      }
}
//Object creation
let emp = new Employee();
console.log(`Id ${emp.id} name ${emp.firstName} ${emp.lastName} ${emp.calculateSalary()}`)