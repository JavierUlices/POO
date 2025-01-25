class Person {
    public name: string;
    private age: number;
    protected correr: string;

    constructor(name: string, age: number, correr: string) {
        this.name = name;
        this.age = age;  
        this.correr = correr;
    }

    public run(): number {
        return 1;
    }

    public printInfo(): void {
        console.log(`Hola soy ${this.name} tengo ${this.age} y estudio ${this.correr}`);  
    }

    // Removed the duplicate run method
}

const person = new Person('Juan Perez', 20, 'software');
person.printInfo();  
