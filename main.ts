import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process'
import Triangle from './Triangle'

async function main() {

    const rl = readline.createInterface({ input, output });

    try {

        const base = await rl.question("Ingrese la base del triangulo: ");
        const height = await rl.question("Ingrese la altura del triangulo: ");

        const base1 = parseFloat(base);
        const height1 = parseFloat(height);

        const triangule = new Triangle(base1, height1);
        console.log(triangule.calculateArea());

    } catch (error) {
        console.log(error);
    } finally {
        rl.close();
    }
}

main();
// esto tengo que importarlo a un tercer archivo.