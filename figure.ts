
export default class Figure {
    public base: number;
    public height: number;

    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }
}

class Triangle extends Figure {
    constructor(base: number, height: number) {
        super(base, height);
    }

    public calculateArea(): number {
        return (this.base * this.height) / 2;
    }
}

const rl = readline.createInterface({ input, output });

// importarlo..........................................

 
import triangulo  from './triangulo';


async function getTriangleArea() {
    const base = await rl.question('Ingrese la base del triángulo: ');
    const height = await rl.question('Ingrese la altura del triángulo: ');

    const triangle = new Triangle(Number(base), Number(height));
    console.log(`El área del triángulo es: ${triangle.calculateArea()}`);

    rl.close();
}

getTriangleArea();
