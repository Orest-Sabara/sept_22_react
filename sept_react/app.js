"use strict";
// type MyType = number|string[]|boolean
//
// const text = (name:string):MyType => {
//     return [name]
// }
//
// console.log(text('Max'));
//
//
// const arr:number[] = [1,2,3,4]
// const arr1:[number, string] = [1, 'af']
//
// interface  IUser {
//     name?:string        // ? необовязково
//     surname:string
//     age:number
//     status:boolean
// }
//
// // const user:IUser = {surname: "popov", age: 22, status: false}
//
// const user:Partial<IUser> = {status: false}         //джайнерік означає шо частково використ
//
// const getName = (user:IUser):string => {
//     return user.name
// }
//
//
// interface  IPlayer<DATA> {
//     name?:string        // ? необовязково
//     surname:string
//     age:number
//     status:boolean
//     data:DATA
// }
//
// const player:IPlayer<number[]> = {surname: "popov", age: 22, status: false, data:[1,12,4]}
//
//
// class Human {
//     // private     //в межах класу
//     // protected   //в межах класу і наслідників
//     // public      //
//
//     // private name:string
//     // private age:number
//     //
//     // constructor(name: string, age: number) {
//     //     this.name = name;
//     //     this.age = age;
//     // }
//
//     constructor(private name: string,private age: number) {
//     }
// }
//
// interface IShape {
//     area:()=>number
//     perimeter:()=>number
// }
//
// interface IGreeting{
//     greeting:()=>void;
// }
//
// class Rectangle implements IGreeting, IShape{       // implements змушує нас реалізувати методи які описані в самому класі
//     constructor(private a:number, private b:number) {
//     }
//
//     greeting():void {
//         console.log('hello');
//     }
//
//     area(): number {
//         return this.a*this.b;
//     }
//
//     perimeter(): number {
//         return (this.a+this.b)*2;
//     }
// }
//
// const rectangle = new Rectangle(6,4);
//
// rectangle.greeting()
// console.log(rectangle.area())
// console.log(rectangle.perimeter())
//
// class Triangle implements IShape {
//     constructor(private a:number, private c:number, private b:number) {
//     }
//     area(): number {
//         return this.a*this.b*this.c;
//     }
//
//     perimeter(): number {
//         return this.a+this.b+this.c;
//     }
// }
//
// const shapes:IShape[] = [new Rectangle(2,5), new Triangle(3,6,6), new Triangle(3,7,4)]
//
// for (let shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimeter())
// }
//
// const x = ():number => {
//   return 15
// }
//
//
// // type MyTypeNEW = ReturnType<typeof x>
// //
// // const a:MyType = 'sss'
//
//
// // const x1 = ():Function => {
// //   const x2 = (a: number):number => {
// //         return 2
// //   }
// //   return x2
// // }
exports.__esModule = true;
// import {userService} from "./services/userService";
//
// userService.getAll().then((data) => {
//     const {status} = data
//     console.log(status)
// })
var status_enum_1 = require("./enum/status.enum");
var user = {
    name: "Max",
    age: 18,
    gender: 'male'
};
function sum(a, b) {
    return a + b;
}
function showSum(a, b) {
    console.log(a + b);
}
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
console.log(sum(1, 2));
showSum(2, 3);
console.log(incAge(user, 2));
if (status_enum_1.StatusEnum.UnAuthorization === 401) {
    console.log('- UnAuthorization -');
}
