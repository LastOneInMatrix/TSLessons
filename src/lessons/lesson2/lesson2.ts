// console.log('lesson 2');
//
// const globalScope = {}
// // Lexical environment
// // http://jsflow.org/docs/lex-env/
//
// //// Closure
// // https://learn.javascript.ru/closure
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// // https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// // https://www.youtube.com/watch?v=pahO5XjnfLA
//
// //// Сurrying
// // https://learn.javascript.ru/currying-partials
// // https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827
//
// // Pattern Module
// // https://habr.com/ru/company/ruvds/blog/419997/
//
// // Recursion
// // https://learn.javascript.ru/recursion
// // https://www.youtube.com/watch?v=Kuq6oIN3PH0
//
//
// // создают область видимости:  function/class ---  switch --- loop --- try/catch --- anonimus code --- if/else   ------------ литерал объекта не создают область видимости
//
//
// // let a = 10;
// //
// // function f() {
// //     console.log(a);
// //     let b = 1;
// //     function innerF() {
// //         console.log(b);
// //         let a = 2;
// //         console.log(a); // защита так как лексическое окружение на самом деле знает и без всплытия о всех объявленных внутри переменных
// //     }
// //     innerF()
// // }
// // f();
//
//
//
// // Task 01
// // Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
// function sum(num1: number){
//     return function(num2: number){
//       return ++num1 + num2;
//     }
// }
// let first = sum(1);
// console.log(first(1));
// console.log(first(1));
// // Task 02
// // Реализовать функцию makeCounter которая работает следующим образом:
// // const counter = makeCounter();
// // counter(); // 1
// // counter(); // 2
// // const counter2 = makeCounter();
// // counter2(); // 1
// // counter(); // 3
//
// const makeCounter = () => {
//     let num = 0;
//     return function () {
//         return ++num;
//     }
// }
//
//
// // Task 03
// // Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// // и возвращала следующий объект методов:
// // increase: +1
// // decrease: -1
// // reset: установить счетчик в 0;
// // set: установить счетчик в заданное значение;
//
// function Task3() {
//     let count: number = 0;
//     return {
//         increase: () => ++count,
//         decrease: () => --count,
//         reset: () => count = 0,
//         set: (num: number) => {
//             count = num;
//             return num;
//         },
//         getCount: () => console.log(count),
//     }
// }
//
// // Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//
// // function sumTo(a: number){
// //         let result = 0;
// //         for(let i = 1; i<=a; i++){
// //             result += i;
// //         }
// //         return result;
// // }
//
// function sumTo(a: number): number {
//     if (a === 1) return a;
//     return a + sumTo(a - 1);
// }
//
// // 3 + sumTo(2) => 2 + sumTo(1)=>1
//
//
// // Task 04*
// // Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// // и что бы корректно работали следующие вызовы:
// // 1) superSum(0) //0
// // 2) superSum(3)(2)(5)(3) //10
// // 3) superSum(3)(2)(5,3) //10
// // 4) superSum(3)(2,5,3) //10
// // 5) superSum(3)(2,5)(3) //10
// // 6) superSum(3)(2,5)(3,9) //10
//
//
const superSum = (arg: number) => {
    let _arguments: number[] = [];

    if (arg < 0) return 0;
    if (arg === 1) return (a: number) => a;


    function helper(...rest: number[]) {
        _arguments = [..._arguments, ...rest];
        if (_arguments.length >= arg) {
            _arguments.length = arg;
            console.log(_arguments);
            return _arguments.reduce((acc, b) => acc + b, 0)
        } else {
            return helper;
        }
    }

    return helper;
}
//@ts-ignore
let result = superSum(3)(2,5)(3,9,2,2)
console.log(result)


let arr = [1,2,3,4,5];
arr.length = 2;
console.log(arr);
// // P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore
// //@ts-ignore

// // Task 05
//
//
// //Задача1
// //вычислить факториал 3! = 3 * 2 * 1 = 6
// function factorial(n: number): number {
//     if (n === 1) return 1;
//     else {
//         return n * factorial(n - 1);
//     };
// }
//
//
//
//
// //example1
// function pow(x: number, n: number) {
//     let result = 1;
//
//     // умножаем result на x n раз в цикле
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
//
// //example2
// function powRecursion(a: number, pow: number): number {
//     return (pow === 1) ? a : a * powRecursion(a, pow - 1) //результат не может быть вычисленн пока есть в стеке зависщая функция
// }
//
// //example3 - рекурсивно определяемая структура данных
// let company = { // тот же самый объект, сжатый для краткости
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
//     development: {
//         sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
//         internals: [{name: 'Jack', salary: 1300}]
//     }
// };
//
// function sumSalaries(department: any) {
//     let sum = 0;
//
//     if (Array.isArray(department)) {
//         return department.reduce((acc, current) => acc + current.salary, 0);
//     } else {
//         for (let subDep of Object.values(department)) {
//             sum += sumSalaries(subDep);
//         }
//         return sum;
//     }
// }
//
//
// //example4 - cвязный список или рекурсивно определяемая структура данных
//
//
//
// //задача 1 sumTo(4) = 4 + 3 + 2 + 1 = 10
// function sumTo1(num: number): number {
//     let sum = 0;
//     if(num === 1) return sum + num;
//     else return sum + sumTo1(num - 1);
// }
//
// //задача 2 factorial1(3) = 3! = 3 * 2 * 1 = 6   alert( factorial(5) ); // 120
//
// function factorial1(num: number): number{
//     if(num === 1) {
//         return 1;
//     }
//     else {
//         return num * factorial1(num-1)
//     }
// }
//
//
// //Задача 3  числа фибоначи alert(fib(7)); alert(fib(3));Последовательность чисел
// // Фибоначчи определяется формулой Fn = Fn-1 + Fn-2.
// // То есть, следующее число получается как сумма двух предыдущих.
//
// function fib(n:number): number {
//         return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
//
// //Задача 4 Напишите функцию printList(list), которая выводит элементы списка по одному.
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
// function printList(list: any): void {
//     console.log(list.value);
//
//     if (list.next !== null) {
//         printList(list.next)
//     }
//     else console.log('finish')
//
// }
//
// //Задача 5 в обратном порядке вывести
// function printList1(list: any): void {
//
//     if (list.next) {
//         printList1(list.next)
//     }
//     console.log(list.value);
// }
// printList1(list);
//
//
//
//
//
// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
//
// // just a plug
export default () => {
};










