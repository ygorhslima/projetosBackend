import PromptSync from "prompt-sync";
const prompt = PromptSync();

let salario=0, soma_salario=0, soma_filhos=0, maior_salario=0,
nfilhos=0,npessoas=0;

salario = Number(prompt("Informe o salário: R$"));

while(salario != -1){
    nfilhos = Number(prompt("quantidade de filhos: "));
    npessoas++;

    if(salario > maior_salario){
        maior_salario = salario;
    }
    soma_filhos += nfilhos;
    soma_salario += salario;


    salario = Number(prompt("Informe o salário: R$"));
}

let media_salario = soma_salario / npessoas;
let media_filhos = soma_filhos / npessoas;

console.log(`A média de salários é ${media_salario.toFixed(1)}`);
console.log(`A média de filhos é ${media_filhos.toFixed(1)}`);
console.log(`o maior salário foi de R$${maior_salario.toFixed(1)}`);

