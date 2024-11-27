// Logice
// let a = 12;
// for(let i=0;i<=Math.sqrt(a);i++){
//     if(a%i==0){
//         console.log(i);   
//         if(i!=a/i) {
//         console.log(a/i);  
//         }        
//     }
// }


// prime Number
let a= 1;
let b=false;
// if(!prime){
//     console.log("prime");
// }else{
//     console.log("not");
    
// }
if(a==1){
    console.log("not prime");
}
!prime(a,b) ? console.log("prime") : console.log("not");
function prime(a,b) {
    for(let i=2;i<=a/2;i++){
        if(a%i==0){
            b=true;
        }
    }return b;
}



