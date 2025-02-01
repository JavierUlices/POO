import Figure from './figure'

export default class Triangle extends Figure {
    constructor(base: number, height: number) {
        super(base, height);
    }

    public calculateArea(): number {
        return (this.base * this.height) / 2;
    }
}

// esto tengo que importarlo a un tercer archivo.