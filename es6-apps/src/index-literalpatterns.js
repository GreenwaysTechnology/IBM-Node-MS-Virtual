//literal pattern

let emp = {
      id: 1,
      firstName: 'DivaSree',
      lastName: 'Subramaian',
      /*  calculateSalary: function () {
             return 1000;
       } */
      /*  calculateSalary: () => {
             return 1000;
       } */
      calculateSalary() {
            return 1000;
      }
};
console.log(`Id ${emp.id} name ${emp.firstName} ${emp.lastName} ${emp.calculateSalary()}`)

emp.id = 100;
emp.firstName = 'foo';
emp.lastName = 'bar';
console.log(`Id ${emp.id} name ${emp.firstName} ${emp.lastName} ${emp.calculateSalary()}`)