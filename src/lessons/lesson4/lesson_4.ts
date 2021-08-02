console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
//         const promise = new Promise((res, rej) => {
//                 console.log('Promise is created');
//         });
//
//         console.log(promise);
//         setTimeout(() => {
//             console.log(promise);
//         },2000)


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
// const promise2 = new Promise((res, rej) => {
//         res('Promise Data');
//         console.log('into new Promise')
//
// });
// Promise.resolve('Promise Data2_2').then(console.log)
// promise2.then(console.log);



// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
// new Promise((res, rej) => rej('Promise Error'))
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
// new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Promise Data')
//     }, 3000)
// })
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError

// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`

// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".

// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject.
//
// Следующие два обработчика запускают методы resolve и reject.

type HandlePromiseType = {
    promise: null | Promise<any>,
    resolve:  null | Function
    reject: null | Function
    onSuccess: (str: string) => void
    onError: (str: string) => void
}
const handlePromise: HandlePromiseType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: function(paramName) {
        console.log(`Promise is resolved with data: ${paramName}`)
    },
    onError: function(paramName) {
        console.log(`Promise is rejected with error: ${paramName}`)
    }

}

export const onCreateClick = () => {
    handlePromise.promise =  new Promise((res, rej) => {
        handlePromise.reject = handlePromise.resolve = (message: string) => {
            message === 'resolve' ? res(message) : rej(message);
                return handlePromise.promise
            };
        console.log('promise was created');
    });

};
export const Resolve_Promise = () => {
    handlePromise.resolve && handlePromise.resolve('resolve')
                            .then(handlePromise.onSuccess)

}
export const Reject_Promise = () => {
  handlePromise.reject && handlePromise.reject('rejected')
                     .catch(handlePromise.onError);
}

//@ts-ignore
window.handlePromise = handlePromise;



// Task 06
// Создайте промис, который через 1с возвращает строку "My name is".

// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции

// Создайте функцию print, которая выводит в консоль значение своего параметра

// Добавьте два метода then и передайте созданные функции.

// const promise6 = new Promise((res,rej) => {
//                 setTimeout(() => {
//                     console.log('setTimeout')//1
//                   res('My name is')
//                 }, 3000)
// });
// function onSuccess(param: any) {
//     console.log('success') //2
//     return `${param} As`
// }
// function print(printParam: any) {
//     console.log('print') //3
//     console.log(`${printParam}`) //4
// }
// promise6
//     .then(onSuccess)
//     .then(print)


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.

// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

const promise7_1 = new Promise((res,rej) => {
        setTimeout(() => {
            console.log('первый')
            res({ name: "Anna" })
        },2000)
});
const promise7_2 = new Promise((res,rej) => {
    setTimeout(() => {
        console.log('второй')
        res({ age: 16 })
    },3000)
});
const promise7_3 = new Promise((res,rej) => {
    setTimeout(() => {
        console.log('третий')
        res({ city: '' }) //todo разобраться
    },4000)
});

Promise.all([promise7_1, promise7_2, promise7_3])
    .then(res => {
        let mergedObject = res.reduce((acc: {}, item) => {
            // return Object.assign(acc, item);
            //@ts-ignore
            return {...acc, ...item}
        }, {});
        console.log(mergedObject)
    })
    .catch(console.log)


// just a plug
export default ()=>{};