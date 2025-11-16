import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Declaração das variáveis e/ou Array de contagem aqui

// Função para exibir o menu de opções.
function exibirOpcoes(){
    console.log("-".repeat(40));
    console.log("[1]Candidato Alfa\n[2]Candidato Beta\n[3]Candidato Gama\n[4]voto nulo\n[0]finalizar a votação e exibir os resultados");
}

// Função para exibir os resultados (exibirResultados).
function exibirResultados(){
    console.log("saindo da urna")
}

exibirOpcoes();
let voto = Number(prompt("digite o seu voto: "));
// Loop principal (while) e a lógica de voto/contagem aqui.
while(voto != 0){
    switch (voto){
        case 0:
            exibirResultados();
            break;
        case 1:
            console.log("votando no candidato Alfa");
            break;
        case 2:
            console.log("votando no candidato Beta");
            break;
        case 3:
            console.log("votando no candidato Gama");
            break;
        case 4:
            console.log("votando nulo");
            break;
    }
    do{
        exibirOpcoes();
        voto = Number(prompt("Digite o seu voto: "));
    }while(voto != 0 && voto != 1 && voto != 2 && voto != 3 && voto != 4);
}
