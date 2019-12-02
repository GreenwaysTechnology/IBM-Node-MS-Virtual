//Object destrucing
/* 
function displayEmployee(employee) {
      //display employee details
      console.log(`id ${employee.id} name ${employee.name} ${employee.salary}`)
} */
//short cut to access object property : destrucing

/* function displayEmployee(employee) {
      //
      const { id, name, salary } = employee;
      //display employee details
      console.log(`id ${id} name ${name} ${salary}`)
} */

/* function displayEmployee({
      id,
      name,
      salary
}) {
      //display employee details
      console.log(`id ${id} name ${name} ${salary}`)
} */

/* const displayEmployee = ({
      id,
      name,
      salary,
      address
}) => console.log(`id ${id} name ${name} ${salary} ${address.city}`) */

const displayEmployee = ({
      id,
      name,
      salary,
      address: {
            city
      }
}) => console.log(`id ${id} name ${name} ${salary} ${city}`)
displayEmployee({
      id: 1,
      name: 'subramanian',
      salary: 4000,
      address: {
            city: 'Coimbatore'
      }
});