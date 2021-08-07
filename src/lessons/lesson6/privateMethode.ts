// console.log('private-protected-properties-methods');
//
// interface ICoffeeMachine {
//     power: number
//     _waterAmount: number
//     waterAmount: Function
// }
// //Защищённые свойства обычно начинаются с префикса _.
// // class CoffeeMachine {
// //     _waterAmount = 0;
// //     //@ts-ignore
// //     set waterAmount(value){
// //         if(value<0) throw new Error('Нельзя налить меньше чем 0')
// //         this._waterAmount = value;
// //     }
// //     get waterAmount(){
// //         return this._waterAmount
// //     }
// //     constructor(public power: number) {
// //         this.power = power
// //         alert( `Создана кофеварка, мощность: ${power}` );
// //     }
// //
// // }
//
// //Свойство только для чтения «power» - Для этого нам нужно создать только геттер, но не сеттер:
class CoffeeMachine {
    _power: number
    private control = 'Licenzia';
    _waterAmount = 0;
    //@ts-ignore
    set waterAmount(value){
        if(value<0) throw new Error('Нельзя налить меньше чем 0')
        this._waterAmount = value;
    }
    get waterAmount(){
        return this._waterAmount
    }
    constructor(power: number) {
        this._power = power
        alert( `Создана кофеварка, мощность: ${power}` );
    }
    get power(){
        return this._power
    }

}

let coffeeMachinev1 = new CoffeeMachine(100);

class CoffeMachine2 extends CoffeeMachine {
    constructor(power: number) {
        super(power);
    }
}
let coffeeMachinev2 = new CoffeMachine2(100);

console.log(coffeeMachinev1)
console.dir(CoffeMachine2)
console.log(coffeeMachinev2)
// coffeeMachinev1.control //Todo error

// coffeeMachine.power = 25; // Error (no setter)

export default {}