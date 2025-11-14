import PromptSync from "prompt-sync";
import express from 'express';

const prompt = PromptSync()
const app = express()


let nome = prompt("digite seu nome: ");
let idade = Number(prompt("digite sua idade: "));
let valor_mensalidade;

app.get("/", (_,res)=>{
    if(idade <= 18){
        valor_mensalidade = 50;
    }else if(idade >= 19 && idade <= 29){
        valor_mensalidade = 70;
    }else if(idade >= 30 && idade <= 45){
        valor_mensalidade = 90;
    }else if(idade >= 45){
        valor_mensalidade = 130;
    }
    let msg = `a mensalidade de ${nome} fica ${valor_mensalidade}`;
    res.json({resultado: msg})
})

app.listen(8081, ()=>{
    console.log("servidor rodando na porta http://localhost:8081");
})