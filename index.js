const botaoInterruptor = document.querySelector('.interruptor button');

botaoInterruptor.addEventListener('click', trocarDeModoLightParaDark);

function trocarDeModoLightParaDark() {
    
    let modoLight = document.documentElement;

    if (modoLight.classList.contains('modo-light')){
        modoLight.classList.remove('modo-light')
        

    } else {
        modoLight.classList.add('modo-light')
    }
};

