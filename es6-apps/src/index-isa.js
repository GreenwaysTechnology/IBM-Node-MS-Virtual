//class based inheritance

class Account {
      constructor(id = 1, name = 'foo') {
            console.log('Account class Constructor');
            this.id = id;
            this.name = name;
      }
      //methods
      withdraw() {
            return 100;
      }
}
class SavingsAccount extends Account {
      constructor(id, name) {
            super(id, name)
            console.log('Savings Account class Constructor');
      }
      //overriding: redefining
      withdraw() {
            return 500 * super.withdraw();
      }
}

let sb = new SavingsAccount(12, 'subramanian');
console.log(`id ${sb.id} name ${sb.name} amount ${sb.withdraw()}`)

sb.id = 900;
sb.name = 'bar'
console.log(`id ${sb.id} name ${sb.name}`)