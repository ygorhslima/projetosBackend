import PromptSync from "prompt-sync";
const prompt = PromptSync();

let sexo = prompt("Informe o sexo [M/F]: ").toUpperCase();
let altura = Number.parseFloat(prompt("digite sua altura: "));
let peso;

if(sexo === "F"){
    peso = (62.1 * altura) - 44.7;
}else{
    peso = (72.7 * altura) - 58;
}

console.log(`o sexo é: ${sexo}`);
console.log(`a Altura é: ${altura}`);
console.log(`o peso ideal é: ${peso}`);
