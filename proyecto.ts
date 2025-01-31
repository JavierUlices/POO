class Person {
    private _age: number = 0;  // Initialize with 0

    public get age(): number {  
        return this._age;
    }

    public set age(value: number) {
        if (value < 0) {  
            throw new Error("La edad debe ser un número positivo.");
        }
        this._age = value;  
    }
}

const person = new Person();
person.age = 9;  // This will not throw an error
