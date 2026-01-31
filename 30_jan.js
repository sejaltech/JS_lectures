// class Car {

//    static fname;


//     constructor (model, bike) {
//         this.model = model;
//         this.bike = bike;


//     }
//     honk () {
//         // console.log('Beep honk');
//         return 'honkking......';
//     }
//     static break(bike) {
//         console.log('applying break...', bike);
//     }
// }

// let object = new Car('r15');
// object.honk();
// Car.break('r15');

// class bmw extends Car{
//     constructor( model, color){
//         super(model);
//         this.color = color;
//     }

//     selector (color) {
//         console.log(color, this.model, "car is", this.honk());
//     }
// }


// let car1 = new bmw('b420');
// car1.selector('white')

//  bank system..
//   2 class.
//  bank & users 
//  bank methods
//  users method

// class Bank {
//     static account = []
//     constructor( id, name, amount) {
//         this.id = id;
//         this.name = name;
//         this.amount = amount;
//     }
// }

// makeAccount(id) {
//     accounts.forEach(i => {
//         if (id == value) {
//             return 0;
//         } else {
//             accounts.push(id);
//         }
//     })
// }


class Bank {
    static accounts = [];
    constructor(id, name, amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }
    static makeAccount(id, name, amount) {
        for (let i = 0; i < Bank.accounts.length; i++) {
            if (Bank.accounts[i].id == id) {
                console.log("Account already exist");
                return;
            }
        }
        Bank.accounts.push(new Bank(id, name, amount));
        console.log("Account created");
    }
    static depositMoney(id, money) {

        for (let i = 0; i < Bank.accounts.length; i++) {
            if (Bank.accounts[i].id == id) {
                Bank.accounts[i].amount = Bank.accounts[i].amount + money;
                console.log("Money deposited");
                console.log("Balance is " + Bank.accounts[i].amount);
                return;
            }
        }
        console.log("Account not found");
    }
    static withdrawMoney(id, money) {
        for (let i = 0; i < Bank.accounts.length; i++) {
            if (Bank.accounts[i].id == id) {

                if (money <= Bank.accounts[i].amount) {
                    Bank.accounts[i].amount = Bank.accounts[i].amount - money;
                    console.log("Money withdrawn");
                    console.log("Balance is " + Bank.accounts[i].amount);
                } else {
                    console.log("No sufficient balance");
                }
                return;
            }
        }
        console.log("Account not found");
    }
}
// calls
Bank.makeAccount(1, "sejal", 3000);
Bank.depositMoney(3, 50000);
Bank.withdrawMoney(1, 100);

