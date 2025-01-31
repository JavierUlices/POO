 



export default class Car {
    public color: string;
    public model: string;
    private _year: number = 0;

    constructor(color: string, model: string, year: number) {
        this.color = color;
        this.model = model;
        this.year = year; 
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