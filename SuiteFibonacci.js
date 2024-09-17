// Fonction pour calculer le n-ième terme de la suite de Fibonacci
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Fonction pour générer une suite de Fibonacci jusqu'à n termes
function generateFibonacciSequence(n) {
    const fibSequence = [];
    for (let i = 0; i < n; i++) {
        fibSequence.push(fibonacci(i));
    }
    return fibSequence;
}

// Exemple d'utilisation
const n = 10; // Nombre de termes souhaités
console.log(generateFibonacciSequence(n));