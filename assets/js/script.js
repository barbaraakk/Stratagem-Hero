// Mostra a tela de "Get Ready"
function showGetReadyScreen(roundNumber) {
    const screen = document.getElementById('getReadyScreen');
    const roundText = document.getElementById('roundNumber');
    roundText.textContent = roundNumber;

    document.querySelector('.title').style.visibility = 'hidden';
    document.querySelector('.subtitle').style.visibility = 'hidden';
    document.querySelector('.start-btn').style.visibility = 'hidden';
    screen.classList.add('show');

    setTimeout(() => {
        screen.classList.remove('show');
        startGame(); // Chama a função que inicia o jogo de verdade
    }, 2000);
}

// Função que representa o início real do jogo
function startGame() {
    //aq tem que iniciar o jogo (nao sei como faz ainda)
    
}


// Handler único para todos os eventos de início (tecla, toque, clique)
function handleStartEvent(e) {
    // Teclado: só se for a tecla 'e'
    if (e.type === 'keydown' && e.key.toLowerCase() !== 'e') return;

    // Clique ou toque em desktop? Ignora.
    if ((e.type === 'click' || e.type === 'touchstart') && window.innerWidth > 768) return;

    showGetReadyScreen(1);
}

// Eventos de teclado
document.addEventListener('keydown', handleStartEvent);

// Clique/touch no botão
const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', handleStartEvent);
startBtn.addEventListener('touchstart', handleStartEvent);

// Clique em qualquer lugar da tela no mobile
document.querySelector('.container').addEventListener('click', handleStartEvent);
