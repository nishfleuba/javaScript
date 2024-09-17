function impaire(tab){

    let tab_1=[];
    for(let i=0; i<tab.length; i++){
        if(tab[i]%2==1){
            tab_1.push(tab[i])
        }
    }return tab_1;
}
function generateImpaire(tab){
    return impaire(tab);
}
const n=[1,2,3,4,5,6,7,8,9];
console.log(generateImpaire(n));

