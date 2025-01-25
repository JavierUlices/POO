class IMC {
    public weight: number;
    public height: number;
    constructor(weight: number, height: number) {
        this.weight = weight;
        this.height = height;
    
}
public calculateIMC(): number {
    return this.weight / Math.pow(this.height, 2);
}
public displayInfo(): void {
    if (this.calculateIMC() > 18.5 && this.calculateIMC() < 24.9) {
        console.log("Peso normal");
    }
    else if (this.calculateIMC() > 25 && this.calculateIMC() <
    29.9) {
        console.log("Sobrepeso");
        }
        else if (this.calculateIMC() > 30 && this.calculateIMC() <
        34.9) {
            console.log("Obesidade grau I");
            }
            else if (this.calculateIMC() > 35 && this.calculateIMC() <
            39.9) {
                console.log("Obesidade grau II");
                }
                else if (this.calculateIMC() >= 40) {
                    console.log("Obesidade grau III");
                    }
                    }
                }


