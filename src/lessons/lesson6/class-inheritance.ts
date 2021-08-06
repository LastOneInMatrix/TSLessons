export class Animal {
    speed: number;
    constructor(public name: string) {
        this.speed = 0;
       this.name = name;
    }
    run(speed: number) {
        this.speed = speed;
        alert(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} стоит.`);
    }
}
//
//
//
// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} прячется!`);
//     }
// }
//
// export let rabbit = new Rabbit("Мой кролик");
// console.log(rabbit)

//После extends разрешены любые выражения
// function f(phrase: string) {
//     return class {
//         sayHi() { alert(phrase) }
//     }
// }
//
// class User extends f("Привет") {}
//
// export const a = new User();

//Переопределение методов

// class Animal {
//     speed: number;
//     constructor(public name: string) {
//         this.speed = 0;
//        this.name = name;
//     }
//     run(speed: number) {
//         this.speed = speed;
//         alert(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
//     stop() {
//         this.speed = 0;
//         alert(`${this.name} стоит.`);
//     }
// }
//
//
//
// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} прячется!`);
//     }
//     stop() {
//         super.stop()
//         this.hide()
//     }
// }
//
// export let rabbit = new Rabbit("Мой кролик");
// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// console.log(rabbit.speed)
// rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!
// console.log(rabbit.speed)

//У стрелочных функций нет super
// export class Rabbit extends Animal {
//     stop() {
//         const that = super.stop
//         setTimeout(function() { that() }, 1000);
//     }
//     stop2() {
//         const that = super.stop
//         setTimeout(() => super.stop(), 1000);
//     }
// }

//Переопределение конструктора


class Rabbit extends Animal {
    earLength: string;
    constructor(name: string, earLength: string) {
        super(name)
        this.speed = 0;
        this.name = name;
        this.earLength = earLength;
    }

    // ...
}

// Не работает!
let rabbit = new Rabbit("Белый кролик", '10'); // Error: this is not defined.

//Итого
// Чтобы унаследовать от класса: class Child extends Parent:
// При этом Child.prototype.__proto__ будет равен Parent.prototype, так что методы будут унаследованы.
// При переопределении конструктора:
// Обязателен вызов конструктора родителя super() в конструкторе Child до обращения к this.
// При переопределении другого метода:
// Мы можем вызвать super.method() в методе Child для обращения к методу родителя Parent.
// Внутренние детали:
// Методы запоминают свой объект во внутреннем свойстве [[HomeObject]]. Благодаря этому работает super, он в его прототипе ищет родительские методы.
// Поэтому копировать метод, использующий super, между разными объектами небезопасно.
// Также:
//
// У функций-стрелок нет своего this и super, поэтому они «прозрачно» встраиваются во внешний контекст.