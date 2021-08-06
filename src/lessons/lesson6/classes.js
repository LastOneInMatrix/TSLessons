// class Rectangle {
//
//     constructor(height, width, area) {
//         this.height = height;
//         this.width = width;
//         this.area = area;
//     }
//
//     get area() {
//        return this.height <= 10 ? this.calcArea() : this._area
//     }
//     set area(value) {
//         if (this.height <= 10) {
//             return
//         }
//         this._area = value;
//     }
//
//     calcArea() {
//         return this.height * this.width;
//     }
// }
//
// const square = new Rectangle(9,   10, 101);
//
// console.log(square.area); // 100
// 1. Создаём функцию constructor
// каждый прототип функции имеет свойство constructor по умолчанию,
// поэтому нам нет необходимости его создавать
// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }
// 2. Добавляем метод в прототип
// User.prototype.sayHi = function(){console.log(this.name)}
//
// // Использование:
// let user1 = new User('As')
// console.log(user1); //
//

//3.Class
// class User {
//     constructor(name) {
//         this.name = name
//     }
//
//     sayHello() {
//         console.log(`${this.name} say hello`)
//     }
// }
//
// const user2 = new User('As');
// user2.sayHello()
// console.log(typeof User);
// console.log(User === User.prototype.constructor)
// console.log(Object.getOwnPropertyNames(User.prototype))

//4.Class Expression
// const User = class {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log(this.name)
//     }
// }

//5.Getter Setter сообственное имя class Expression
// const newUserClass =  class NAME{
//     constructor(name) {
//         this.name = name
//     }
//     sayClassName(){
//         console.log(NAME)
//     }
//     get name() {
//         return this._name
//     }
//     set name(valueForName) {
//         if(valueForName.length < 4) {
//                 console.log('Мало букв')
//             this._name = 'Мало букв';
//             return
//             }
//         else {
//             this._name = valueForName;
//         }
//
//     }
// }
//
// // Object.defineProperties(newUserClass.prototype, {
// //     name: {
// //         get() {
// //             return this._name
// //         },
// //         set(valueForName) {
// //             if(valueForName.length < 4) {
// //                 console.log('Мало букв')
// //                 return
// //             }
// //             this._name = valueForName;
// //         }
// //     }
// // });
//
// // let user = new newUserClass("Ashot");
// // console.log(user.name); // Иван
// //
// let user1 = new newUserClass("s");
// console.log(user1)
// // new newUserClass("").sayClassName();

// 6.Свойство классов
// Свойства классов добавлены в язык недавно.
// class User {
//     name = 'Anonim';
//     constructor(age, name) {
//         this.age = age;
//     }
//     showInfo(){
//         console.log(`${this.age}, ${this.name}`)
//     }
// }
// const userAnonim = new User(28);
// userAnonim.showInfo()