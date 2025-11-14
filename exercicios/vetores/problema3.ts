import PromptSync from "prompt-sync";
const prompt = PromptSync();


interface funcionario{
    matricula:number;
    nome:string;
    setor:string;
    salario:number;
}

let tam:number = 3;
let f:Array<funcionario>=new Array(tam).fill([]);

f.forEach((ficha)=>{
    ficha.matricula = Number(prompt("digite uma matricula: "));
    ficha.nome = prompt("digite seu nome: ");
    ficha.setor = prompt("digite seu setor: ");
    ficha.salario = Number(prompt("digite seu salário: "));
})

console.log(f);