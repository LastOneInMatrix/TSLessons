console.log('lesson 2');

const globalScope = {

}
// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0



// создают область видимости function/class  switch loop try/catch anonimus code if/else


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
    function sum(a: number){
        return function(b: number){
            return a + b;
        }
    }


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

const makeCounter = () => {
    let num = 0;
    return function(){
            return ++num;
    }
}



// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function Task3(){
        let count: number =0;
        return {
            increase: () => ++count,
            decrease: () => --count,
            reset: () => count = 0,
            set: (num: number) => {
                count = num;
                return num;
            },
            getCount: () => console.log(count),
        }
}

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// function sumTo(a: number){
//         let result = 0;
//         for(let i = 1; i<=a; i++){
//             result += i;
//         }
//         return result;
// }

function sumTo(a: number): number {
        if(a === 1) return a;
        return a + sumTo(a - 1);
}
// 3 + sumTo(2) => 2 + sumTo(1)=>1
console.log(sumTo(3)); //6





// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10


const superSum = (arg:  number) => {
    let _arguments: number[] = [];

    let functionScope = {
        outerScope: globalScope,
        arg: 3,
        _arguments: [2,2,1],
        helper: 'Function-ссылка на саму себя получается?'
    }

    if(arg<0) return 0;
    if(arg ===1) return (a: number) => a;



    function helper(...rest: number[]){
            debugger;
        let helperFunctionScope = {
            outerScope: functionScope,
            rest: undefined
        }
        _arguments = [..._arguments, ...rest];
        if(_arguments.length === arg) {
            _arguments.length = arg;
           return _arguments.reduce((acc,b) => acc + b, 0)
        }
        else {
            return helper;
        }
    }
    return helper;
}
// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore
//@ts-ignore
console.log(superSum(3)(2)(2)(1))



// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {};