import PromptSync from "prompt-sync";
const prompt = PromptSync()


let npessoas = 0;
let soma_altura = 0;
let soma_idade = 0;

let idade,altura;

idade = Number(prompt("digite sua idade: "));
while(idade != 0){
    altura = Number(prompt("digite sua altura: "));
    npessoas++;
    soma_idade += idade;
    soma_altura += altura;
    idade = Number(prompt("digite sua idade: "));
}

let media_altura = soma_altura / npessoas;
let media_idade = soma_idade / npessoas;

console.log(`a média de altura é ${media_altura.toFixed(1)}`);
console.log(`a média de idade é ${media_idade.toFixed(1)}`);