import PromptSync from "prompt-sync";
const prompt = PromptSync();

let nome:string = prompt("digite seu nome: ");
let tam:number = nome.length;

for(let i:number = 0; i<tam; i++){
    if(i%2==0){
        console.log(`${nome[i]}`);
    }
}