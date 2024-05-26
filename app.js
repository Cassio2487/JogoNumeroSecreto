alert("Bem vindo ao jogo do número secreto!");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1)
console.log(numeroSecreto)
let chute 
let tentativas =1;

//enquanto
while (chute != numeroSecreto) {
   chute = prompt (`Escolha um numero entre 1 e ${numeroMaximo}`);
   // se o chute for igual ao numero secreto
   if (numeroSecreto == chute) {
    break;
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

let palavrTentativa = tentativas > 1? "tentativas" : "tentativa"
alert (`Isso ai! Voçê descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavrTentativa}.` );

//if(tentativas >1) {
  //  alert (`Isso ai! Voçê descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.` );
//} else {
  //  alert (`Isso ai! Voçê descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.` );
//}
