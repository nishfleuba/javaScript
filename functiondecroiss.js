function decroiss(tableau) {
    let n = tableau.length; 
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1; j++) { 
            if (tableau[j] < tableau[j + 1]) {
               
                let a = tableau[j];
                tableau[j] = tableau[j + 1];
                tableau[j + 1] = a;
            }
        }
    }
    return tableau;
}

let nombre = [4, 3, 6, 9, 1, 2, 5, 7, 8];
console.log("avant tri", nombre);
let nom = decroiss(nombre);
console.log("après tri", nom);