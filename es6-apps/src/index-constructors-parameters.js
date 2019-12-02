/* function Employee(id = 1, firstName = 'Divya Sree', lastName = 'Subramanian') {
      //data + methods
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      //methods
      this.calculateSalary = function () {
            return 100 * 100;
      }
} */
class Employee {
      //instance variables     
      constructor(id = 1, firstName = 'Divya Sree', lastName = 'Subramanian') {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
      }
      calculateSalary = () => {
            return 100 * 100;
      }
}
//let emp = new Employee(1, 'Subramanian', 'Murugan');
let emp = new Employee();
console.log(`Id ${emp.id} name ${emp.firstName} ${emp.lastName} ${emp.calculateSalary()}`)