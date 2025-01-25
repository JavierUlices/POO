var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var rectangle = new Rectangle(10, 5);
console.log("El \u00E1rea del rect\u00E1ngulo es ".concat(rectangle.calculateArea(), " y el per\u00EDmetro es: ").concat(rectangle.calculatePerimeter()));
