import PromptSync from "prompt-sync";
const prompt = PromptSync();

let num, quadrado
let raiz;

num = Number(prompt("digite um valor: "));
if(num % 2 == 0){
    raiz = Math.sqrt(num);
    console.log(`a raiz quadrada de ${num} é ${raiz}`);
}else{
    quadrado = num ** 2;
    console.log("o número é ímpar");
    console.log(`o número ao quadrado é: ${quadrado}`)
}