console.log('Lesson 5');

// Keyword - this

https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290


// let someObj:someObjType = {
//     name: 'Eugene',
//     age: 32
// }
//
//     const obj = {
//         name: 'as',
//         age: 28,
//         sayAge() {
//             console.log(this.age)
//         }
//     }
//     obj.sayAge() // 28
//
//     setTimeout(obj.sayAge.bind, 2000) //undefined

//@ts-ignore

// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

// type someObjType = {
//     name: string;
//     age: number;
//     greeting?: () => string
// }
//
//
// let object: someObjType = {
//     name: 'as',
//     age: 28,
// }
//



// object.greeting = greeting;
// object.greeting();

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

type counterType = any;
//@ts-ignore

// const counter: counterType = {
//     count: null,
//     'get current count': function(){
//         //@ts-ignore
//        console.log(this.count);
//     },
//     increment: function() {
//         //@ts-ignore
//         this.count = this.count + 1;
//         return this;
//     },
//     decrement: function() {
//         //@ts-ignore
//         this.count = this.count - 1;
//         return this;
//     },
//     'set current count': function (num: number) {
//         //@ts-ignore
//          this.count = num
//         return this;
//     },
//     'rest current count': function() {
//         //@ts-ignore
//         this.count = 0;
//         return this;
//     },
// }
// counter['set current count'](10).increment().increment().increment().decrement()['get current count']()
    //
// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12


// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

// function greeting() {
//     //@ts-ignore
//     console.log(`My name is ${this.name}. I am ${this.age}`)
//     //@ts-ignore
//     return `My name is ${this.name}. I am ${this.age}`
// };
//
// function myFirstConstructorFunc(name: string, age: number) {
//     //@ts-ignore
//     this.name = name;
//     //@ts-ignore
//     this.age = age;
//     //@ts-ignore
// }
// //@ts-ignore
// const newPerson = new myFirstConstructorFunc('Talgat', 105);
// newPerson.prototype = greeting;
//
// console.log(newPerson);


// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One;

let One = {
    name: 'One',
};
//
let Two = {
    name: 'Two',
    sayHello:  function() {console.log(`Hello, my name is ${this.name}`)}
};

// //@ts-ignore
// One.sayHello = Two.sayHello.bind(Two);
// //@ts-ignore
// Two.sayHello()



// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

const helperObj = {
    name: '',
    age: null,
    that: null,
    changeName: function (str:  string){
        //@ts-ignore
        this.that = this
        this.name = str;
        return this;
    },
    setAge: function (str:  number){
        //@ts-ignore
        this.age = str;
        return this;
    },
    greeting: Two.sayHello
};
// console.log(helperObj.changeName('Ash').greeting());
//  //todo разобраться почему this байндиться не так как надо

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
// function sumTwoNumbers(a:number,b:number):number {return a + b};
//
// function bindNumber(f: Function) {
//     return f.bind(null, 1);
// }
// console.log(bindNumber(sumTwoNumbers)(1));

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj.
// Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента
// и устанавливает ее свойству name объекта One
// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two
let OneTest = {
    name: 'One',
};

function testBind(obj: any, helperObj: any){
    obj.hi = helperObj.greeting.bind(Two)
    helperObj.setAge.bind(obj)(30)
    return function(str: string) {
        obj.name = str
    }
}
testBind(OneTest, helperObj)('Ashot')
//@ts-ignore
console.log(OneTest.hi())
// Реализовать задачи 2-4 из Bind с помощью Call

// Task 07
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.


// just a plug
export default () => {};

