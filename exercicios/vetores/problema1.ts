import PromptSync from "prompt-sync";
const prompt = PromptSync();

let vetorA:number[] = new Array(30).fill(0);
let i:number;

for(i=0; i<30; i++){    
    vetorA[i] = Number(prompt(`Digite o ${i} valor: `));
}
for(i=29; i>= 0; i--){
    console.log(`${vetorA[i]}`);
}
