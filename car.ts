import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

class Car {
    public color: string;
    public model: string;
    private _year: number = 0;

    constructor(color: string, model: string, year: number) {
        this.color = color;
        this.model = model;
        this.year = year; // Initialize the year using the setter
    }

    public get year(): number {
        return this._year;
    }

    public set year(value: number) {
        if (isNaN(value)) {
            throw new Error("El año debe ser un numero valido");
        }

        if (value < 1960) {  
            throw new Error("Debe ingresar autos mayores a 1960");
        }
        this._year = value;
    }

    public displayInfo() {
        console.log(`Car Info: Color - ${this.color}, Model - ${this.model}, Year - ${this.year}`);
    }
}

async function main() {
    const rl = readline.createInterface({ input, output });
    try {
        const color = await rl.question("Ingrese el color del auto: "); 
        const model = await rl.question("Ingrese el modelo del auto: "); 
        const year = await rl.question("Ingrese el año del auto: "); 
        
        const car = new Car(color, model, parseInt(year)); 
        car.displayInfo();
    } catch (error) {
        console.error(error);
    } finally {
        rl.close();
    }
}

main();
