function paire(tab){

    let tab_2=[];
    for(let i=0; i<tab.length;i++){
        if(tab[i]%2==0){
            tab_2.push(tab[i])
        }
    }
    return tab_2;

}
function generatePaire(tab){
    return paire(tab);

   }
   


const n=[1,2,3,4,5,6,7,8];
console.log(generatePaire(n));



