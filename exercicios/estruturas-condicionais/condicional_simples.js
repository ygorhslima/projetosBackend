import PromptSync from "prompt-sync";
const prompt = PromptSync()


let num = Number(prompt("digite um número inteiro: "));
if(num%2 == 0){
    let raiz = Math.sqrt(num);
    console.log(`a raiz quadrada de ${num} é ${raiz}`);
}
