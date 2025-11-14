import PromptSync from "prompt-sync";

const prompt = PromptSync();

let num1 = Number(prompt("digite um valor: "));
let num2 = Number(prompt("digite outro valor: "));
let resultado;

console.log("-----------------------------------------");
console.log("               OPERAÇÕES                 ");
console.log("-----------------------------------------");
console.log(`[1] SOMA\n[2] SUBTRAÇÃO\n[3]MULTIPLICAÇÃO\n[4] DIVISÃO`);

let operacao = Number(prompt("digite a operação a ser efetuada: "));
switch(operacao)
{
    case 1:
        resultado = num1 + num2;
        break;
    case 2:
        resultado = num1 - num2;
        break;
    case 3:
        resultado = num1 * num2;
        break;
    case 4:
        if((num1 != 0) && (num2 != 0)){
            resultado = num1 / num2;
        }else{
            console.log("não é possível dividir um valor nulo");
            resultado = 0;
        }   
        break;
    default:
        console.log("digite os valores corretamente")
        break;
}
console.log(`o resultado do cálculo foi de ${resultado}`);