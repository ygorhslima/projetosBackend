import PromptSync from "prompt-sync";
import express from 'express';

const prompt = PromptSync()
const app = express()

let sexo = prompt("informe seu sexo [M/F]: ").toUpperCase();
let altura = Number.parseFloat(prompt("Informe sua altura: "));
let peso;
app.get("/", (req,res)=>{
    
    if(!sexo || !altura){
        return res.status(400).json({erro: "informe sexo e altura"});
    }

    if(sexo == "F"){
        peso = (62.1 * altura) - 44.7;
    }else{
        peso = (72.7 * altura) - 58;
    }
    res.json({  
        resultado: {
            s:`o sexo é ${sexo}`,
            a:`A altura é ${altura.toFixed(2)}`,
            p:`O peso ideal é ${peso.toFixed(2)}`,
        }
    })
})

app.listen(8081, ()=>{
    console.log("servidor rodando na porta http://localhost:8081");
})