## 🗳️ Desafio 1: Sistema Eletrônico de Votação Simplificado

### Descrição do Problema

Você deve desenvolver um programa em **JavaScript** para terminal que simule uma urna eletrônica para uma eleição simples. O sistema deve ser robusto contra entradas inválidas e calcular os resultados finais da votação.

### Requisitos Funcionais

1.  **Menu e Candidatos:** O sistema deve exibir o menu de votação e os códigos válidos dos três candidatos:
    * **1:** Candidato Alfa
    * **2:** Candidato Beta
    * **3:** Candidato Gama
    * **4:** Voto Nulo
    * **0:** Finalizar a votação e exibir os resultados.

2.  **Input e Repetição:** O programa deve usar um **loop principal (`while`)** para solicitar 
votos continuamente até que o usuário insira a opção `0`.

3.  **Validação:** O sistema deve aceitar **apenas** os códigos válidos (`0`, `1`, `2`, `3`, 
`4`). Caso o usuário digite um valor inválido, uma mensagem de erro deve ser exibida, e o programa deve solicitar o voto novamente (use um **`do-while`** ou **`while`** aninhado para garantir a validade).

4.  **Contabilização:** Você deve usar variáveis simples ou um **Array** para armazenar a contagem de votos para cada opção.

5.  **Função de Resultado:** Crie uma **função** chamada `exibirResultados()` que será executada ao final do loop principal (`0`).

6.  **Saída Final:** A função `exibirResultados()` deve imprimir:
      * O total de votos para cada candidato (Alfa, Beta, Gama).
      * O total de votos nulos.
      * O **vencedor** da eleição (o candidato com mais votos). Em caso de empate, declare "Eleição empatada".

**Seu Desafio:** Implemente o código seguindo esses requisitos. Lembre-se de utilizar a tipagem correta do JavaScript e estruturar bem o código com **funções** e **condicionais (`switch` ou `if/else`)**.

Qualquer dúvida sobre a estrutura ou se precisar de uma dica para implementar a contagem de votos, me avise\! 💪
