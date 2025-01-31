"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(color, model, year) {
        this._year = 0;
        this.color = color;
        this.model = model;
        this.year = year;
    }
    Object.defineProperty(Car.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            if (isNaN(value)) {
                throw new Error("El año debe ser un numero valido");
            }
            if (value < 1960) {
                throw new Error("Debe ingresar autos mayores a 1960");
            }
            this._year = value;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.displayInfo = function () {
        console.log("Car Info: Color - ".concat(this.color, ", Model - ").concat(this.model, ", Year - ").concat(this.year));
    };
    return Car;
}());
exports.default = Car;
