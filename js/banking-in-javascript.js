class Savings {
    constructor(id, desc) {
        this.id = id;
        this.desc = desc;
        this.balance = 0;
    }

    
    deposit(amt){
        if (amt <= 0 || typeof amt != "number") {
            console.error("Amount must be a number greater than zero.");
            return false;
        }
        this.balance += amt;
        return true;
    }
    withdraw(amt){
        if (amt < 0 || amt >= this.balance) {
            console.error("Amount must be a number greater than zero.");
            return false;
        }
        this.balance -= amt;
        return true;
    }
    transfer(amt, toAcct){
        //withdraw from this account, move to another account
        if (amt < 0) {
            console.error("Amount must be greater than zero.");
            return false;
        }
        this.withdraw(amt);
        toAcct.deposit(amt);
        return true;
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
console.log("Acct2 after transfer: " + acct2.print());
console.log("Acct1 after transfer: " + acct1.print());