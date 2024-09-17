let num = [6, 7, 3, 1, 2, 9, 5];
console.log("avant tri", num);

for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length - 1 ; j++) { 
        if (num[j] < num[j + 1]) { 
            
            let d = num[j];
            num[j] = num[j + 1];
            num[j + 1] = d;
        }
    }
}

console.log("après tri", num);