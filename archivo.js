// Función para calcular el factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Función para solicitar el número y calcular el factorial
function calculateFactorial() {
    const input = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    
    // Verificar si la entrada es un número
    if (isNaN(input) || input === '') {
        resultElement.textContent = "Error: Por favor, introduce un número válido.";
    } else {
        const num = parseInt(input);
        const result = factorial(num);
        resultElement.textContent = `El factorial de ${num} es: ${result}`;
    }
}

// Asociar el botón al evento de clic
document.getElementById('calculateButton').addEventListener('click', calculateFactorial);

