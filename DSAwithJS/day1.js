// // Logice
// // let a = 12;
// // for(let i=0;i<=Math.sqrt(a);i++){
// //     if(a%i==0){
// //         console.log(i);   
// //         if(i!=a/i) {
// //         console.log(a/i);  
// //         }        
// //     }
// // }


// // prime Number
// let a= 1;
// let b=false;
// // if(!prime){
// //     console.log("prime");
// // }else{
// //     console.log("not");
    
// // }
// if(a==1){
//     console.log("not prime");
// }
// !prime(a,b) ? console.log("prime") : console.log("not");
// function prime(a,b) {
//     for(let i=2;i<=a/2;i++){
//         if(a%i==0){
//             b=true;
//         }
//     }return b;
// }
// let n=9;
// let arr =[0,0,3,0,0,5,0,0,7]
// for(let i=0;i<n;i++){
//     let start = 0;
//     let end = n-1;
//     if(arr[i]===start){
//         arr[end]=arr[i];
//         end--;
//     }else{
//         if(arr[i]!=0){
//             arr[start]=arr[i];
            
//         }start++;

// //     }
// // }console.log(arr);
// let arr1=[];
// let arr2=[];
// for(let i=0;i<n;i++){
//     if(arr[i]!=0){
//         arr1[i]=arr[i];
//         arr1.sort();
//     }
//     else{
//         arr1[n-1]=arr[i];
//         i--;
//     }
//     // else{
//     //     arr2[i]=arr[i];
//     // }
// }let arr3=[];
// // for(let i=0;i<n;i++){
// //     arr3[i]=arr1[i];
// //     arr3[arr1.length+1]=arr2[i];
// console.log(arr3);
// let i=0,j=0;
// while(j<=n-1){
//     if(arr[j]==0){
//         j++;
//     }
//     if(arr[i]!=0){
//         swap(arr,i,j);
//         i=i+1;
//         j=j+1;
//     }
//     // console.log(arr);
// }console.log(arr);

// function swap(arr,i,j) {
//     let k=arr[i];
//     arr[i]=arr[j];
//     arr[j]=k;
// }
// let arr=[1, 2, 3, 4, 5 ,6 ,7];
// let n=arr.length;
// let  rotations = 3;
// for(let i=0;i<rotations;i++){
//     let ab=arr[0];
//     // arr.pop(i);
//     // arr.push(ab);
// }console.log(arr.pop(arr[0]));

// let len=5;
// let key=4;
// let arr=[8,2,6,4,7];
// let i=0,j=len-1;
// let mid=i+j/2;
// // while (i<j){
//     if(arr[mid]=== key){
//         console.log(mid);
//         // let ans = mid;
//     }
//     else if(arr[i]<key){
//         j=mid-1;
//         // if(key===arr[mid]) console.log(mid);   
//     }else if(arr[i]>key){
//         i=mid+1;
//         // if(key===arr[mid]) console.log(mid);
//     }
// }

// for(let i=0;i<len;i++){
//     if(arr[i]===key) console.log(i);
// }




