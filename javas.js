
// function person(fname , lname){
//     let firstname = fname ;
//     let lastname = lname;
    
//     let getDetails_access = function (){
//         return(`first name  is : ${firstname} lastname is : ${lastname}`)
//     }
    
//     // this.getDetails_access = function(){
//     //     return (`This is fristName:${firstname} and lastname  is: ${lastname}`)
//     // }
// }
// let person1 = new person('Rk' , 'k');
// console.log(person1.firstname)
// console.log(person1.getDetails_access)
// // console.log(person1.getDetails_access())


// class car{
//     constructor(engine,process){
//         this.engine = engine;
//         this.process = process;
//     }
//     getDetails(){
//         console.log(`${this.engine} and ${this.process}`)
//     }
// }
// let cars = new car ("start" , "vehicle runs");

// cars.getDetails()




// class Car {
//     #engine;
//     #process;

//     constructor(engine, process) {
//         this.#engine = engine;
//         this.#process = process;
//     }

//     getDetails() {
//         console.log(`${this.#engine} and ${this.#process}`);
//     }
// }

// let cars = new Car("start", "vehicle runs");

// cars.getDetails();               
// console.log(cars.engine);





class bank {
    constructor(withdraw){
        this.balance = 1000;
        this.minimum = 500;
        this.withdraw = withdraw;
    }
    getDetails(){
        if((this.balance-this.withdraw)>=this.minimum){
            console.log("withdraw successfull")
        }else{
            console.log("not available")
        }
    }
}

let check = new bank(100);
check.getDetails()












