//EJEMPLO DE GETTERS Y SETTERS 
var Person = /** @class */ (function () {
    function Person() {
        this._age = 0;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value <= 0 || !Number.isFinite(value)) {
                throw new Error('La edad debe ser un número positivo y finito');
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.age = 10; // Asigna correctamente el valor
console.log(person.age); // Imprime: 10
