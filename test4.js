var IMC = /** @class */ (function () {
    function IMC(weight, height) {
        if (weight <= 0 || height <= 0) {
            throw new Error("Weight and height must be positive numbers.");
        }
        this.weight = weight;
        this.height = height;
    }
    IMC.prototype.calculateIMC = function () {
        return this.weight / Math.pow(this.height, 2);
    };
    IMC.prototype.displayInfo = function () {
        var imcValue = this.calculateIMC();
        if (imcValue < 18.5) {
            return "Peso bajo";
        }
        else if (imcValue >= 18.5 && imcValue <= 24.9) {
            return "Peso normal";
        }
        else if (imcValue >= 25 && imcValue <= 29.9) {
            return "Sobrepeso";
        }
        else if (imcValue >= 30 && imcValue <= 34.9) {
            return "Obesidad grado I";
        }
        else if (imcValue >= 35 && imcValue <= 39.9) {
            return "Obesidad grado II";
        }
        else if (imcValue >= 40) {
            return "Obesidad grado III";
        }
        else {
            return "IMC inválido";
        }
    };
    return IMC;
}());
try {
    var myIMC = new IMC(70, 1.75);
    console.log("IMC:", myIMC.calculateIMC().toFixed(2));
    console.log("Categoría:", myIMC.displayInfo());
}
catch (error) {
    console.error(error.message);
}
