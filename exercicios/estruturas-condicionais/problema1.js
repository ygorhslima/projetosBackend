import PromptSync from "prompt-sync";
const prompt = PromptSync()

let num = Number(prompt("digite um valor: "));
if(num % 5==0){
    console.log(`${num} é divisível por 5`);
}else{
    console.log(`${num} não é divisível por 5`)
}
