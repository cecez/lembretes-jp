window.onload = function() {

    // falador
    var synth = window.speechSynthesis;
    var voices = synth.getVoices();

    var texto = "João Pedro Leal Rosa, você está comendo?";

    var utterThis = new SpeechSynthesisUtterance(texto);
    utterThis.voice = voices[0];
    utterThis.pitch = 1;
    utterThis.rate = 1;

    // áudio de alerta
    var audioTag = document.querySelector('#audio');

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



    var botao = document.querySelector('#botao');
    
    botao.onclick = function() {

        setInterval(function() { 

            play(audioTag.src).then(function() {
                synth.speak(utterThis)
            });
            
        }, 10000);
        
    }



}

