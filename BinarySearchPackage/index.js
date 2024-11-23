const binarySearchPackage = (key,array)=>{

    for(let i=0;i<array.length;i++){
        if(array[i]==key){
            console.log("founded");
        }else{
            console.log("not founded");
        }
    }
}
export default binarySearchPackage;