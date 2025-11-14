import PromptSync from "prompt-sync";
const prompt = PromptSync();

let idade:number;
let opiniao:number;
let soma_idade:number=0;
let media_idade:number=0;

let n_clientes:number=0;
let n_clientes_satisfatorios:number=0;
let n_clientes_indiferentes:number=0;
let n_clientes_insatisfatorios:number=0;

idade = Number(prompt("informe sua idade: "));
while(idade != 0){
    console.log("-------------------Menu-------------------");
    console.log("1-Satisfatorio\n2-indiferente\n3-insatisfeito");
    
    do{
        opiniao = Number(prompt("digite sua opinião: "));
    }while((opiniao != 1) && (opiniao != 2) && (opiniao != 3));

    n_clientes++;
    switch (opiniao) {
        case 1:
            soma_idade += idade;
            n_clientes_satisfatorios++;
            break;
        case 2:
            n_clientes_indiferentes++;
            break;
        case 3:
            n_clientes_insatisfatorios++;
            break;
        default:
            console.log("Impossível você ter errado >:(");
            break;
    }
    
    idade = Number(prompt("informe sua idade: "));  
}

media_idade = soma_idade / n_clientes;
console.log(`o número de pessoas insatisfeitas é: ${n_clientes_insatisfatorios}`);
console.log(`o números de pessoas satisfeitas é: ${n_clientes_satisfatorios}`);
console.log(`a média de idade das pessoas satisfeitas é: ${media_idade}`);