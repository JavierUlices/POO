class Person {
    private _age: number;  
    public get age(): number {  
        return this._age;

    }

    public set age(value: number) {
        if (value <- 0) {
            throw new Error("la edad debe ser un número positivo.");
        }
         if (isNaN(value)) {
            throw new Error("la edad debe ser un número.");
         }
        this._age = value;  

    }
}

const person = new Person();
person.age = -10;  
