alert("Bem vindo ao jogo do número secreto!");
let numeroSecreto = 29;
console.log(numeroSecreto)
let chute 
let tentativas =1;

//enquanto
while (chute != numeroSecreto) {
   chute = prompt ("Escolha um numero entre 1 e 30");
   // se o chute for igual ao numero secreto
   if (numeroSecreto == chute) {
    alert (`Isso ai! Voçê descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.` );
   } else {
       if (chute > numeroSecreto) {
           alert(`O numero secreto é menor que ${chute}`);
       } else {
           alert (`O numero secreto é maior que ${chute}`);
       }
       //tentativas = tentativas + 1;
       tentativas++;
   }
}
