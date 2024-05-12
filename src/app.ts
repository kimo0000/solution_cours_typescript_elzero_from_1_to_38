// ----- lesson from 12 To 21:
// exercise 3:
// function printInfo(valueOne:number|string, valueTwo:number|string):string|number {
//   return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
// }

// console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
// console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

// exercise 4:
// let arr: (number | boolean[] | (string | (string | number)[])[])[] = [1, [true, false], ["A", "B", ["r", 4, 5]]];
// console.log(arr); 

// exercise 5:
// let state:boolean = false;
// function reportErrors(username, age: number) {
//   if(state) {
//       return `Username: ${username}`;
//   }
//   console.log("We Will Not Reach Here");
// }

// console.log(reportErrors("Elzero", 40));

// exercise 6:
// let nothing: any;
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c) {
//   return `${a}${b}${c}`;
// }

// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails("el", "ze", "ro")); // Elzero

// exercise 7:
// function showMsg(user?: string, age?: number|string, country?: string) {
//   return `${user} ${age} ${country}`;
// }

// console.log(showMsg());
// console.log(showMsg("Elzero"));
// console.log(showMsg("Elzero", 40));
// console.log(showMsg("Elzero", "40", "Egypt"));

// exercise 8:
// Write The Function Here
// function printInConsole(...args: (string | number | boolean)[]) {
// return args.map(el => `The Value Is ${el} And Type Is ${typeof (el)}` + "\n").join('');
// }
// // Using The Function => Do Not Edit
// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));

// Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done

// exercise from 12 to 21:
// -- exercise 1:
// Write Your Code Here

// Do Not Edit Here
// type n = number;
// let myData: n;
// myData = 1000; // No Problem Here
// myData = +true; // No Problem Here

// console.log(myData);

// -- exercise 2:
// Write Your Code Here
// type mix = number | boolean;
// // Do Not Edit Here
// let myInfo: mix;
// myInfo = 1000; // No Problem Here
// myInfo = true; // No Problem Here

// console.log(myInfo);

// -- exercise 3:
// Write Your Code Here
// type Info = {
//     theName: string,
//     theAge: number
// }

// type Full = Info & {
//     country?: string
// }
// // Do Not Edit Here
// function showInfo(data: Info) : void {
//   console.log(`The Name Is ${data.theName}`);
//   console.log(`The Age Is ${data.theAge}`);
// }
// console.log(showInfo({ theName: "Elzero", theAge: 40 }));

// function showFullInfo(data: Full) : void {
//   console.log(`The Name Is ${data.theName}`);
//   console.log(`The Age Is ${data.theAge}`);
//   console.log(`The Country Is ${data.country}`);
// }
// console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));

// -- exercise 4:
// function yesOrNo(val: number) : "True" | "False" {
//   return val > 10 ? "True" : "False";
// }

// // Do Not Edit Here
// console.log(yesOrNo("100")); // Error
// console.log(yesOrNo(30)); // True
// console.log(yesOrNo(8)); // False

// -- exercise 5
// type custom = "Yes" | "No";
// function isHeOld(age: number) : custom {
//   return age > 40 ? "Yes" : "No";
// }

// // Do Not Edit Here
// console.log(isHeOld("100")); // Error
// console.log(isHeOld(45)); // "Yes"
// console.log(isHeOld(30)); // "No"

// -- exercise 6:
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
// let post : readonly [number, string, boolean] = [100, "Title", true]; // Good

// post.push("Elzero"); // Error => Cant Add

// // Create Destructuring Here
// const [id, title, state] = post;
// // Do Not Edit Here
// console.log(id); // 100
// console.log(title); // "Title"
// console.log(state); // true

// -- exercise 7:
// Create Enums + Function Here
// function createEnum(num: number) {
//     return num;
// }
// enum Game {
//     Easy = 100,
//     Medium = Easy - 20,
//     Hard = Medium - (Easy / 2),
//     Insane = createEnum(20)
// }
// // Output
// console.log(Game.Easy); // 100
// console.log(Game.Medium); // 80
// console.log(Game.Hard); // 30
// console.log(Game.Insane); // 20

// -- exercise 8:
// const user: {
//   username: string,
//   age: number,
//   website?: string,
//   skills: {
//     frontEnd: string[],
//     backEnd: (string | number)[]
//   }
// } = {
//   username: "Elzero",
//   age: 40,
//   website: "Elzero.org",
//   skills: {
//     frontEnd: ["HTML", "CSS", "JS"],
//     backEnd: ["PHP", "Python"]
//   }
// }

// // We Need To Remove Error From This Edits
// user.username = "Osama";
// user.age = 40;
// user.skills.backEnd.push(100);

// console.log(user.username, user.age, user.skills.backEnd);

// ----- Lesson from 22 To 31:
// exercise 1:
// Edit The Interface To Fix The Problems
// interface Member {
//   id: number | string;
//   username: string;
//   country?: string;
//   state: boolean;
//   getName: () => string;
// }

// // Do Not Edit The Code Below
// let user: Member = { // Property 'country' is missing in type
//   id: 100,
//   username: "Elzero",
//   state: true,
//   getName() { // 'getName' does not exist in type 'Member'
//     return this.username;
//   }
// }

// user.id = 200;
// user.id = "200"; // Type 'string' is not assignable to type 'number'
// user.state = false; // Cannot assign to 'state' because it is a read-only property

// console.log(user.getName());

// exercise 2:
// Create Interface Here
// interface Client {
//     id: number;
//     username: string;
//     active: boolean;
//     discount: number;
//     getPrice(price: number): number; 
// }
// // Do Not Edit The Code Below
// let client: Client = {
//   id: 100,
//   username: "Elzero",
//   active: true,
//   discount: 10,
//   getPrice(price: number) {
//     return price - this.discount;
//   }
// }

// console.log(`Client Id Is ${client.id}`);
// console.log(`Client Name Is ${client.username}`);
// console.log(`Client Has Dicount ${client.discount}`);
// console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

// exercise 3:
// Do Not Edit The Code Below
// interface Man {
//   title: string;
//   weight: number;
//   age: number;
// }

// interface Bird {
//   canFly: boolean;
// }

// interface Superman extends Man, Bird {
//   bodyType: string;
//   origin: string;
// }

// let creature: Superman = {
//   title: "Superman",
//   weight: 100,
//   age: 500,
//   canFly: true,
//   bodyType: "Iron",
//   origin: "Krypton"
// }

// console.log(creature);

// exercise 4:
// Create Class Here
// class Player {
//     constructor(public username: string, public state: string, public point: number | string, public boll?: boolean) {
//     }
//     details(): string {
//       return `${this.username == "Osama" || this.username == "Amr" ? "VIP "+this.username : this.username }, Type Is ${this.state} Level Is ${this.point}`;
//     }
// }
// // Do Not Edit The Code Below
// let player1 = new Player("Osama", "Mage", 90, true);
// let player2 = new Player("Shady", "Archer", "85", false);
// let player3 = new Player("Amr", "Fighter", 50, true);
// let player4 = new Player("Mahmoud", "Assassin", 77);

// console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
// console.log(player2.details()); // Shady, Type Is Archer Level Is 85
// console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
// console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

// exercise 5:
// class Shorten {
// //   public id: number;
// //   public username: string;
// //   protected title: string;
//   constructor (public id: number, public username: string, protected title: string) {
//     // this.id = id;
//     // this.username = username;
//     // this.title = title;
//   }
// }

// let tester = new Shorten(100, "Elzero", "Developer");

// console.log(tester.id);
// console.log(tester.username);

// exercise 6:
// class Show {
//   constructor (private _title: string) {
// }
// get title() { 
//     return this._title; 
// }
// set title(value: string) { 
//     this._title = value; 
// }
// }

// let tester = new Show("Elzero");

// console.log(tester.title); // Property 'title' does not exist on type 'Show'
// tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
// console.log(tester.title); // Property 'title' does not exist on type 'Show'

// exercise 7:
// interface Play {
//   id: number;
//   title: string;
//   level: number | string;
//   logIn(): void;
//   logOut(msg: string): void;
// }

// // Create Your Class Here
// class Player implements Play {
//    constructor(public id: number, public title: string, public level: number | string) {
//    }
//    logIn() {
//      console.log(`Logged In`);
//    }
//    logOut(msg: string): void {
//        console.log(`Logged Out, ${msg}`);
//    }
// }

// let player1 = new Player(100, "Elzero", 95);

// console.log(player1.id); // 100
// console.log(player1.title); // "Elzero"
// console.log(player1.level); // 95
// player1.logIn(); // Logged In
// player1.logOut("Good Bye"); // Logged Out, Good Bye

// ----- lesson from 32 To 38:
// ---- exercise 1:
// Do Not Edit
// type numandstring = number | string;

// abstract class Game {
//   constructor(public title: string, public price: numandstring) {}
//   abstract getLocation() : string;
//   abstract getDiscount() : string;
// }

// // Start Edit And Fix
// class RPG extends Game {
//   constructor(title: string, public price: numandstring, public rate: number) {
//     super(title, price);
//   }
//    getLocation() :string {
//      return "Location";
//   }
//   getDiscount() :string {
//       return "Discount";
//   }
// }

// class Action extends Game {
//   constructor(title: string, public price: numandstring, public rate: number, public company: string) {
//     super(title, price);
//   }

//   getLocation() :string {
//      return "Location";
//   }
//   getDiscount() :string {
//       return "Discount";
//   }
// }
// // End Edit And Fix

// // Do Not Edit
// let gameOne = new RPG("Ys", 100, 10);
// let gameTwo = new Action("Uncharted", 90, 15, "Sony");

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// console.log(gameOne.rate); // 10
// console.log(gameOne.getDiscount()); // "Discount"
// console.log(gameOne.getLocation()); // "Location"

// console.log(gameTwo.title); // "Uncharted"
// console.log(gameTwo.price); // 90
// console.log(gameTwo.rate); // 15
// console.log(gameTwo.company); // "Sony"
// console.log(gameTwo.getDiscount()); // "Discount"
// console.log(gameTwo.getLocation()); // "Location"

// ---- exercise 2:
// Write Function Code Here
// function showTypes<S = string, N = number, B = boolean>(title?: S, price?: N, bool?: B) : string {
//   return `${title ? title : "Nothing"} - ${price ? price : "Nothing"} - ${bool ? bool : "Nothing"}`;
// }
// // Do Not Edit Here
// console.log(showTypes()); // Nothing - Nothing - Nothing
// console.log(showTypes<string>("String")); // String - Nothing - Nothing
// console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
// console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true

// ---- exercise 3:
// Write Class Code Here
class Game<T> {
  constructor(public title: T, public price: number) {}
  getDiscount(param: T) : void {
     console.log(`The Discount Is ${param}`);
  }
}
// Do Not Edit Here
let gameOne = new Game<string>("Ys", 100);
let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
gameOne.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo.title); // 2064
console.log(gameTwo.price); // 100
gameTwo.getDiscount(80); // "The Discount Is 80"