//calcular el area del perimetro de un circulo con typescript
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.calculatePerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var circle = new Circle(5);
console.log("El \u00E1rea del c\u00EDrculo es ".concat(circle.calculateArea(), " y el per\u00EDmetro (circunferencia) es: ").concat(circle.calculatePerimeter()));
