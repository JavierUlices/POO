//calcular el area del perimetro de un circulo con typescript
class Circle {
    public radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    public calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

const circle = new Circle(5);
console.log(`El área del círculo es ${circle.calculateArea()} y el perímetro (circunferencia) es: ${circle.calculatePerimeter()}`);


