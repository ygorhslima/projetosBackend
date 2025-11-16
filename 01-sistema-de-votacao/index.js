import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Declaração das variáveis e/ou Array de contagem aqui
let voto_alfa=0;
let voto_beta=0;
let voto_gama=0;
let voto_nulo=0;

// Função para exibir o menu de opções.
function exibirOpcoes(){
    console.log("-".repeat(40));
    console.log("[1]Candidato Alfa\n[2]Candidato Beta\n[3]Candidato Gama\n[4]voto nulo\n[0]finalizar a votação e exibir os resultados");
}

// Função para exibir os resultados (exibirResultados).
function exibirResultados(){
    console.log("\n" + "=".repeat(40));
    console.log("🗳️ RESULTADOS DA VOTAÇÃO 🗳️");
    console.log("=".repeat(40));

    const contagemVotos = {
        "Candidato Alfa":voto_alfa,
        "Candidato Beta":voto_beta,
        "Candidato Gama":voto_gama,
    }

    // verificando o maior voto utilizando o max para facilitar a verificação da maior votação
    let maior_voto = Math.max(voto_alfa,voto_beta,voto_gama);

    let vencedores = []
    for(const candidato in contagemVotos){
        if(contagemVotos[candidato] === maior_voto && maior_voto > 0){
            vencedores.push(candidato)
        }
    }

    console.log(`
    votos no candidato Alfa: ${voto_alfa}
    votos no candidato Beta: ${voto_beta}
    votos no candidato Gama: ${voto_gama}
    votos em Nulo: ${voto_nulo}
    `);

    console.log("-".repeat(40));

    if(vencedores.length === 1){
        console.log(`o vencedor de eleição é ${vencedores[0]} com ${maior_voto} votos`);
    }
}
exibirOpcoes();

let voto = Number(prompt("digite o seu voto: "));
// Loop principal (while) e a lógica de voto/contagem aqui.
while(voto != 0){
    switch (voto){
        case 0:
            console.log("saindo da urna....");
            break;
        case 1:
            console.log("votando no candidato Alfa");
            voto_alfa++;
            break;
        case 2:
            console.log("votando no candidato Beta");
            voto_beta++;
            break;
        case 3:
            console.log("votando no candidato Gama");
            voto_gama++;
            break;
        case 4:
            console.log("votando nulo");
            voto_nulo++;
            break;
        default:
            console.log("Voto inválido!");
    }do{
        exibirOpcoes();
        voto = Number(prompt("Digite o seu voto: "));
    }while(voto != 0 && voto != 1 && voto != 2 && voto != 3 && voto != 4);
}

exibirResultados();