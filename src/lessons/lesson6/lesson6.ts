console.log('Lesson 6');

// class Test {
//     name: string;
//     //sayHi: Function;
//
//     constructor(name: string) {
//         this.name = name;
//         //this.sayHi = function () { }
//     }
//
//     sayHi() {
//        this.sayBy();
//     }
//
//     sayBy = () => {
//
//     }
// }
//
// let testObj = new Test('Evgen');
// console.log(testObj)


// class Test {
//     name: string;
//     //sayHi: Function;
//
//     constructor(name: string) {
//         this.name = name;
//         //this.sayHi = function () { }
//     }
//
//     sayHi() {
//
//     }
//
//     sayBy() {}
// }
//
//
// class Test2 extends Test {
//     constructor(name: string) {
//         super(name);
//     }
//
//     sayBy() {}
//
//     parentSayBy() {
//         super.sayBy();
//     }
// }
//
//
// class Test3 extends Test2 {
//     age: number
//     constructor(name: string, age: number) {
//         super(name);
//         this.age = age;
//     }
//
//     sayBy() {
//         super.sayBy()
//         super.parentSayBy()
//     };
//
//     sayYo() {
//
//     }
// }
//
// let testObj = new Test3('Evgen', 50);
// console.log(testObj)


// class Helper {
//     helpMethod1() {
//
//     }
//     helpMethod2() {
//
//     }
// }
//
// class SuperHelper extends Helper {
//     helpMethod3() {
//
//     }
// }
//
// let obj = new SuperHelper();
// console.log(obj)

// class Test {
//
//     private param = 10;
//
//     constructor(public name: string) {
//         this.name = name;
//     }
//
//     showParam() {
//         console.log(this.param);
//         console.log(Test.staticParam);
//     }
//
//     // private sayHi() {
//     //     let temp = this.multiply();
//     //     return this.plus(temp);
//     // }
//     //
//     // private multiply() {
//     //
//     // }
//     // private plus() {
//     //
//     // }
//     static staticParam = 50;
//     static testMethod() {
//         console.log(this.staticParam);
//     }
// }
//
// class Test2 extends Test {
//     constructor(public name: string) {
//         super(name);
//     }
// }
//
// console.dir(Test2);
// let obj = new Test2('Yo')
// console.log(obj)

// let obj = new Test('Evgen');
// console.log(obj);

//obj.showParam()
//@ts-ignore
//console.log(obj.param)

//
// interface Itest {
//     name: string;
//     sayHi: Function;
// }
//
// interface Itest2 {
//     name: string;
//     sayBye: Function;
// }
//
// class Test implements Itest, Itest2 {
//     constructor(public name: string) {
//         this.name = name;
//     }
//
//     sayHi() {
//
//     }
//
//     sayBye() {
//
//     }
//
//     Yo() {
//
//     }
//
// }

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

interface IStudent {
    name: string,
    surname: string,
    groupNumber: number,
    progress: Array<number>
    averageMark: number
}

class Student implements IStudent {
    averageMark: number;

    // constructor( public name: string, public surname: string, public groupNumber: number, public progress: number[]) {
    //         this.name = name,
    //         this.surname = surname,
    //         this.groupNumber = groupNumber,
    //         this.progress = progress
    //         this.averageMark = this.progress.reduce((sum, mark) => sum + mark) / this.progress.length
    // }
    constructor(public name: string, public surname: string, public groupNumber: number, public progress: number[]) {
        this.name = name;
        this.surname = surname;
        this.groupNumber = groupNumber;
        this.progress = progress;
        this.averageMark = this.progress.reduce((sum, mark) => sum + mark) / this.progress.length;
    }
    private static sortHelper(st1:IStudent, st2: Student){   //по типизации одно и тоже
            if (st1.averageMark < st2.averageMark) {
                return 1
            }
            else if(st1.averageMark > st2.averageMark) {
                return -1
            }
            else return 0
    }
    static sortStudents(arr: Array<IStudent>) {
        const temp = [...arr];
        return temp.sort(this.sortHelper)
    }
    private static isAllMarkIsEqual(marks: Array<number>, mark: number) {
        return marks.every((mr) => mr === mark);
    }
    private static filterStudents(arrStudents: Array<IStudent>) {
        const result: Array<IStudent> = [];
        arrStudents.forEach((student) => {
            if (this.isAllMarkIsEqual(student.progress, 4) || this.isAllMarkIsEqual(student.progress, 5)) {
                result.push(student)
            }
        })
        return result;
    }
    static consoleStudent(arrStudents: Array<IStudent>) {
        // this.filterStudents(arrStudents).forEach(st => {
        //     console.log(`student: ${st.name} - in group: ${st.groupNumber}`)
        // })
        console.log(this.filterStudents(arrStudents))
    }
}

const students: Array<IStudent> = [
    new Student('As', 'Bars', 1 , [3,4,4,5,2]),
    new Student('Daf', 'dino', 2 , [4,4,4,4,4]),
    new Student('Gim', 'Lorem', 2 , [3,4,3,3,3]),
    new Student('Leo', 'Bdor', 1 , [5,5,5,5,5]),
    new Student('Buro', 'Dada', 1 , [2,2,3,5,2]),
    new Student('Burso', 'Gans', 2 , [4,4,4,5,2])
];

console.log(students);
console.log(Student.sortStudents(students));
Student.consoleStudent(students);


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};


//1 first Class

class User {
    name: string; //типизация внутри класса
    // sayHi: () => void;
    constructor(name: string) {
        this.name = name
        // this.sayHi = function(){console.log(this.name)} -- добовляется к каждому экземпляру класса
    }
    sayHi() {
        console.log(`${this.name} say Hi!`)
    } //данный метод идет в прототип не перечисляемые методы
    sayYo = () => {
        console.log(this) //запоминает this будущего объекта навсегда, и будет принадлежать экземпляру объекта
    }
}


class UserWithAge extends User {
    age: number
    constructor(name: string, age: number){
        super(name) //вызов конструктора родителя, который создает this, поэтомиу без супер к this не обратиться
        this.age = age
    }
    sayAge() {
        console.log(`${this.name} is age: ${this.age}`)
    }
}

const user1 = new UserWithAge('As', 20);
console.log(user1)