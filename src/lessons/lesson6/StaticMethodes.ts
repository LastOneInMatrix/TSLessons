
//private
// export class Test {
//     private param = 10;
//     constructor(public name: string){
//             this.name = name
//     }
//     showParam(){
//         console.log(this.param)
//     }
//     private showParamMethode(){
//         console.log(this.param)
//     }
// }
//
// const obj = new Test('As');
// // obj.param // ошибка приватное свойство обьекта нужно для инкапсуляции данных

//static

// export class User {
//     name: string;
//             constructor(name: string) {
//                 this.name = name
//             }
//     sayHi(){
//                 console.log(this.name) //this равен будущему объекту
//     }
//     static sayHi() {
//                 console.log(this === User) // this равен самой функции-классу User
//     }
// }
//
// // class User { }
// //
// // User.staticMethod = function() {
// //     alert(this === User);
// // };
// User.sayHi(); // true

//example1
// export class Article {
//     constructor(public title: string, public date: Date) {
//         this.title = title;
//         this.date = date;
//     }
//
//     static compare(articleA: any, articleB: any) {
//         return articleA.date - articleB.date;
//     }
// }
//
// // использование
// let articles = [
//     new Article("HTML", new Date(2019, 1, 1)),
//     new Article("CSS", new Date(2019, 0, 1)),
//     new Article("JavaScript", new Date(2019, 11, 1))
// ];
//
// articles.sort((a: any, b: any) => {return a.date - b.date});
//
// alert( articles[0].title ); // CSS

//example2
// class Article {
//     title: string;
//     date: Date
//     constructor(title: string, date: Date) {
//         this.title = title;
//         this.date = date;
//     }
//
//     static createTodays() {
//         // помним, что this = Article
//         return new this("Сегодняшний дайджест", new Date());
//     }
// }
//
// let article = Article.createTodays();
//
// console.log( article.title ); // Сегодняшний дайджест
//
// class Publish {
//     static publisher = "Илья Кантор";
// }
//
// console.log( Publish.publisher );


//Статические свойства и методы наследуются.

// class Animal {
//
//     constructor(name, speed) {
//         this.speed = speed;
//         this.name = name;
//     }
//
//     run(speed = 0) {
//         this.speed += speed;
//         alert(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
//
//     static compare(animalA, animalB) {
//         return animalA.speed - animalB.speed;
//     }
//
// }
//
// // Наследует от Animal
// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} прячется!`);
//     }
// }
//
// let rabbits = [
//     new Rabbit("Белый кролик", 10),
//     new Rabbit("Чёрный кролик", 5)
// ];
//
// rabbits.sort(Rabbit.compare);
//
// rabbits[0].run();

export default  {}