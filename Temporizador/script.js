// Contador com setInterval
let counter = 0;
const counterElement = document.getElementById('counter');
const timeoutMessage = document.getElementById('timeoutMessage');
const resetButton = document.getElementById('resetButton');

const updateCounter = () => {
    counter++;
    counterElement.textContent = `Contador: ${counter}`;

    // Alterar cor dinamicamente com base no valor do contador
    counterElement.style.color = `hsl(${counter * 30 % 360}, 70%, 50%)`;
};

const startCounter = () => {
    counter = 0;
    timeoutMessage.style.display = 'none';
    counterElement.style.color = 'white';
    counterInterval = setInterval(() => {
        updateCounter();

        if (counter >= 10) {
            clearInterval(counterInterval);
            counterElement.textContent += " (Parado após 10 segundos)";
        }
    }, 1000);

    setTimeout(() => {
        timeoutMessage.style.display = 'block';
        timeoutMessage.textContent = `Mensagem: "Olá! Esta mensagem apareceu após ${counter} segundos!"`;
    }, 5000);
};

let counterInterval = null;
startCounter();

// Reiniciar Contador ao clicar no botão
resetButton.addEventListener('click', () => {
    clearInterval(counterInterval);
    startCounter();
});
