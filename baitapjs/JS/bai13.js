// 13. Hãy viết chương trình đảo ngược sau s.
// VD: “This is a beautiful day”, output: ”yad lufituaeb a si sihT”

function reverseStr(str){
    var newStr = "";
    for(var i = str.length-1; i>=0 ; i-- ){
        newStr = newStr + str[i];
    }
    return newStr;
   
}
console.log(reverseStr('This is a beautiful day'));

//dao nguoc cac tu trong chuoi 
// function reverseStr(str){
//     return str.split(" ").reverse().join("");
// }
// console.log(reverseStr('This is a beautiful day'));