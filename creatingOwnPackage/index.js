function sumofarray(){
    let  a1 =[1,2,23,3,4];
     let a2 =[3,6,43,2,2];
     let a3=[];
      for(let i=0;i<a1.length;i++){
          a3[i]=a1[i]+a2[i];
      }console.log(a3);
  }
export default sumofarray;
// console.log("hello");
const stringHelper = {
    // 1. Remove Duplicates
    removeDuplicates: function (str) {
      return [...new Set(str)].join("");
    },
  
    // 2. Arrange in Ascending Order
    sortAscending: function (str) {
      return str.split("").sort().join("");
    },
  
    // 3. Arrange in Descending Order
    sortDescending: function (str) {
      return str.split("").sort().reverse().join("");
    },
  
    // 4. Reverse String
    reverse: function (str) {
      return str.split("").reverse().join("");
    },
  
    // 5. Capitalize First Letter
    capitalizeFirst: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  
    // 6. Check if Palindrome
    isPalindrome: function (str) {
      const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
      return cleanStr === cleanStr.split("").reverse().join("");
    },
  
    // 7. Count Words
    wordCount: function (str) {
      return str.split(/\s+/).filter(Boolean).length;
    },
  
    // 8. Remove Vowels
    removeVowels: function (str) {
      return str.replace(/[aeiouAEIOU]/g, "");
    },
  
    // 9. Replace All Occurrences
    replaceAllOccurrences: function (str, find, replace) {
      return str.split(find).join(replace);
    },
  
    // 10. Truncate String to N Characters
    truncate: function (str, n) {
      return str.length > n ? str.slice(0, n) + "..." : str;
    },
  };

