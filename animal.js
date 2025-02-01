var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(color) {
        this.color = color;
    }
    Animal.prototype.fly = function () {
    };
    Animal.prototype.run = function () {
        console.log('El animal esta corriendo');
    };
    Animal.prototype.eat = function () {
        console.log('El animal esta comiendo');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(color, breed) {
        var _this = _super.call(this, color) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.run = function (name) {
        if (name === undefined) {
            _super.prototype.run.call(this);
        }
        else {
            console.log("".concat(name, " esta corriendo"));
        }
    };
    return Dog;
}(Animal));
var dog = new Dog('negro', 'pastor aleman');
dog.run('Firulais');
dog.eat();
dog.fly();
