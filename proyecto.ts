//EJEMPLO DE GETTERS Y SETTERS 

class Person {
    private _age: number = 0;

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        if (value <= 0 || !Number.isFinite(value)) {
            throw new Error('La edad debe ser un número positivo y finito');
        }
        this._age = value;
    }
}

const person = new Person();
person.age = 10; // Asigna correctamente el valor
console.log(person.age); // Imprime: 10
