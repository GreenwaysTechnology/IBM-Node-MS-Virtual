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
}
*/
class Employee {
      //instance variables
      id = 1;
      firstName = 'Divya Sree';
      lastName = 'Subramanian';
      calculateSalary = () => {
            return 100 * 100;
      }
}

//Object creation
let emp = new Employee();

console.log(`Id ${emp.id} name ${emp.firstName} ${emp.lastName} ${emp.calculateSalary()}`)
//state initalization
emp.id = 1000;
emp.firstName = 'Subramanian';
emp.lastName = 'Murugan';
console.log(`Id ${emp.id} name ${emp.firstName} ${emp.lastName} ${emp.calculateSalary()}`)