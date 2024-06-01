let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function jogoDeAdivinhacao() {
    const palpiteDigitado = pegarPalpiteDigitado();
    
    if(!palpiteDigitado) {
        alert("Digite um valor válido!")
        return;
    } 

    if (palpiteDigitado < 1 || palpiteDigitado > 100) {
        alert("Digite um número entre 1 e 100!");
        return;
    }

    if(palpiteDigitado === numeroAleatorio) {
        alert("Parabéns, você adivinhou!")
    } else if (palpiteDigitado > numeroAleatorio) {
        tentativas++;
        atualizarFeedback("Esse número é muito alto. Tente novamente.")
    } else if (palpiteDigitado < numeroAleatorio){
        tentativas++;
        atualizarFeedback("O número é muito baixo. Tente novamente.")
    }

    const novaPontuacao = 100 - (tentativas * 10);
    atualizarPontuacao(novaPontuacao);

    const palpitesFalhos = pegarPalpitesFalhos();
    const novosPalpitesFalhos = palpitesFalhos + " " + palpiteDigitado;
    atualizarPalpitesFalhos(novosPalpitesFalhos);

    const pontuacaoAtual = pegarPontuacao();
    if(pontuacaoAtual === "Você tem 0 pontos") {
     alert("Perdeu! você chegou no limbo, acabo para você!");
    reiniciarJogo();
}


function reiniciarJogo() {
    const vaiReiniciar = confirm("Deseja jogar novamente?");
    
    //if(vaiReiniciar === true) {
        if(vaiReiniciar) {
        atualizarPalpitesFalhos("");
        atualizarPontuacao(100)
        atualizarFeedback("")
        limparPalpiteDigitado();
         
    }
}
}