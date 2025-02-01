class Animal {

    public color: string;

    constructor(color: string) {
        this.color = color;
    }

    public fly(): void {

    }

    public run(): void {
        console.log('El animal esta corriendo');
    }

    public eat(): void {
        console.log('El animal esta comiendo');
    }
}

class Dog extends Animal {

    public breed: string;

    constructor(color: string, breed: string) {
        super(color);
        this.breed = breed;
    }

    public run(name?: string): void {

        if (name === undefined) {
            super.run();
        } else {
            console.log(`${name} esta corriendo`);
        }
    }

}

const dog = new Dog('negro', 'pastor aleman');
dog.run('Firulais');
dog.eat();
dog.fly();