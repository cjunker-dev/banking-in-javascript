class Savings {
    constructor(id, desc, balance) {
        this.id = id;
        this.desc = desc;
        this.balance = balance;
    }

    
    deposit(amt){
        if (amt > 0) {
            this.balance += amt;
        }
        
    }
    withdraw(amt){
        if (amt > 0 && amt <= this.balance) {
            this.balance -= amt;
        }
    }
    transfer(amt, toAcct){
        //withdraw from this account, move to another account
        if (amt > 0) {
            this.withdraw(amt);
            toAcct.deposit(amt);
        }

    }
    print(){
        return `${this.id} | ${this.desc} | ${this.balance}`;
    }
}
console.log("test");
let acct1 = new Savings(1, "savings", 200);
console.log(acct1.print());
acct1.deposit(1300);
console.log(acct1.print());
acct1.withdraw(500);
console.log("acct1:" + acct1.print());
let acct2 = new Savings(2, "more savings", 300);
console.log("Acct2 before transfer: " + acct2.print());
acct1.transfer(200, acct2);
console.log("Acct2: " + acct2.print());