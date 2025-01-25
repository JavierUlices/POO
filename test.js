var Person = /** @class */ (function () {
    function Person(name, age, correr) {
        this.name = name;
        this.age = age;
        this.correr = correr;
    }
    Person.prototype.run = function () {
        return 1;
    };
    Person.prototype.printInfo = function () {
        console.log("Hola soy ".concat(this.name, " tengo ").concat(this.age, " y estudio ").concat(this.correr));
    };
    return Person;
}());
var person = new Person('Juan Perez', 20, 'software');
person.printInfo();
