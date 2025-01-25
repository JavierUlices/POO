class Rectangle {
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public calculateArea(): number {
        return this.width * this.height;
    }

    public calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(10, 5);
console.log(`El área del rectángulo es ${rectangle.calculateArea()} y el perímetro es: ${rectangle.calculatePerimeter()}`);

