let num=[3,6,2,8,0,9,1];
console.log("avant tri",num);
for(let i=0; i<num.length; i++){
    for(let j=0; j<num.length-1; j++){

         if(num[j]>num[j+1]){
            let a=num[j];
            num[j]=num[j+1];
            num[j+1]=a;
         }

    }
}
console.log("apres tri",num);