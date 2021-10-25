function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// função para aguardar término do play do áudio
function play(src) {
    return new Promise(function(resolve, reject) {   // return a promise
        var audio = new Audio();                     // create audio wo/ src
        audio.preload = "auto";                      // intend to play through
        audio.autoplay = true;                       // autoplay when loaded
        audio.onerror = reject;                      // on error, reject
        audio.onended = resolve;                     // when done, resolve

        audio.src = src; 
    });
}

var frases = [
    'João, está comendo?',
    'Joããão, lembra de comer tá bem?',
    'Oi João Pedro Leal Rosa, boa refeição.',
    'Oi, tá lembrado de comer?',
    'Já terminou de comer João?',
    'Outra colherada por favor.',
    'João Pedro, é hora de comer. (Miguel que disse)',
    'Peixe vai comer um cocozão. (João que disse)',
    'João, tem que comer! (Miguel que disse)',
    'Leve o seu lanchinho (João que disse)',
    'João Pedro, coloca a comida na boca (Miguel que disse)',
    'Ai ai ai me machuquei, tenho que comer minha comidinha! (João que disse)',
    'João, come direitinho tá? (Miguel que disse)',
    'João Pedro, comer comer para poder crescer (mamãe Ana que disse)',
    'Florzinha, fica quieta se não eu não vou te dar o seu jantar. (João que disse)',
    'João, come o seu arroz com batata direitinho (Miguel que disse)',
    'João, seus soldadinhos estão com muita fome, pelo amooor de Deus. (mamãe Ana que disse)',
    'Soldadinhos fortes, barriga cheia (Miguel que disse)',
    'João, come. Se não, não vai ganhar sua refeição deliciosa de balinha (João que disse)',
    'João, deixa a boquinha bem cheinha e aí tu mastiga bem pra ficar gordinho. (por Miguel)',
    'O Nintendo vai ser preso se você não comer e até ele pode morrer. (por João)',
    'João, se tu não comer tudinho tu vai ver o que vai acontecer com o teu Nintendo (mentirinha) (por Miguel)',
    'Flor flor flor, Cezar se lembre-se de comer, pra você comer agora hein! (por João)'
];

var imagens = [];

function piscaTela() {
    console.log("Piscar tela");
}

function desabilitaBotao() {
    botao.classList.add('opacity-50');
    botao.classList.add('cursor-not-allowed');
}

window.onload = function() {

    // carrega json com imagens
    fetch("imagens.json")
    .then(res => res.json())
    .then(data => imagens = data)
    .catch(erro => imagens.push('mario.webp'));

    // falador
    var synth = window.speechSynthesis;
    var voices = synth.getVoices();

    var texto = "João Pedro Leal Rosa, você está comendo?";

    var utterThis = new SpeechSynthesisUtterance(texto);
    utterThis.voice = voices.filter((a,b) => a.name == 'Luciana')[0];
    utterThis.pitch = 1;
    utterThis.rate = 1;

    // tags de referência
    //var audioTag = document.querySelector('#audio');
    const caminhoBaseImagens = 'imagens/';
    var imagemTag = document.querySelector('#imagem');
    var textoTag = document.querySelector('#texto');
    var botao = document.querySelector('#botao');
    
    botao.onclick = function() {

        // desabilitar botão
        desabilitaBotao();

        // frase inicial
        utterThis.text = "Oba! João Pedro começou a comer!";
        synth.speak(utterThis);


        setInterval(function() {

            var fraseDaVez = frases[getRandomIntInclusive(0, frases.length - 1)];
            
            // pisca fundo da tela
            piscaTela();

            // muda texto na tela
            textoTag.textContent = fraseDaVez;

            // sorteia alerta sonoro

            // sorteia frase
            utterThis.text = fraseDaVez;

            // sorteia imagem
            imagemTag.src = caminhoBaseImagens + imagens[getRandomIntInclusive(0, imagens.length - 1)];

            // toca alerta sonoro e frase
            //play(audioTag.src).then(function() {
                synth.speak(utterThis)
            //});
            
        }, 5000);
        
    }


}

