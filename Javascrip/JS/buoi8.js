// //function

// function helloWorld(){
//     var name ="World";
//     alert("Hello" + name)
//     console.log("hello" + name)
// }

// //invoke, call function phải gọi hàm thì hàm function mới đc thực hiện
// helloWorld()


//function

// function hello(name){
//     var name ="World";
//     alert("Hello" + name)
//     console.log("hello" + name)
// }

// //invoke, call function phải gọi hàm thì hàm function mới đc thực hiện
// hello("world")

//function isPrime - số nguyên tố
// function isPrime(number){
//     var isPrime = true; //giả sử cho nó là nguyên tố sau đó kiểm tra
//     if(number < 2){
//         isPrime = false;
//     }else{
//         for(var i = 2; i <= Math.sqrt(number); i++ ){
//             if(number % i === 0){
//                 isPrime = false;
//                 break;
//             }
//         }
//     }
//     return isPrime;
// }
// var isPrimeNumber = isPrime(11)
// alert(isPrimeNumber)

// //recursive - đệ quy
// function check(number){ // hoặc viết là let check = function(number){} cũng đc
//     if(number == 0) return 0;
//     var result = check(number - 1);
//     return number + result;
// } 
// var total = check(10);
// console.log("total:", total)

// function check even number
// function isEven(number){
//     if( number % 2 ==0){
//         return true
//     }else{
//         return false
//     }
// }
// //use arrow function, fat arrow
// let isEvenArrow = (number) => number % 2 === 0 // với trường hợp có 1 giá trị number có thể bỏ đi dấu (), và có 1 phép tính duy nhất thì => phép tính nó bằng với trường hợp return

// var checkEven = isEvenArrow(2)
// console.log("checkEven", checkEven)

//math handle
// var strNumber = "1234.5"
// var numberInt = Number.parseInt(strNumber)
// var numberFloat = Number.parseFloat(strNumber)
// var number = Number(strNumber)
// console.log("numberInt:", numberInt,
// "numberFloat", numberFloat, "number:", number, Number.isInteger(number))
// console.log("Math.floor:", Math.floor(number)) // làm tròn xuống
// console.log("Math.ceil", Math.ceil(number))// làm tròn lên
// console.log("Math.round", Math.round(number))// làm tròn lên hoặc xuống theo quy tắc làm tròn
// console.log("Math.random", Math.random())// ngẫu nhiên trong vòng từ 0 đến nhỏ hơn 1

// //random từ 1 đến n
// var n = 19;
// function getRandom(n){
//     return Math.floor(Math.random()*n)+ 1;
// }
// console.log("result", getRandom(n))

// function getRandom(from, to){
//     return from + Math.floor(Math.random()*(to - from+1))
// }
// console.log("result", getRandom(n))
// var from = 5;
// var to = 10;
// console.log("result " + from + " -> " + to + " :")
// getRandom (from,to)


// //Khai báo string
// var name = "thuong"
// var name1 = 'thuong'
// var name2 = `thuong`
// // khái báo 3 kiểu này như nhau
// var name3 = "\"thuong \n \t tran\""
// var userName = "chinh"
// var name4 = `Mr${userName} - 20 ages `
// console.log(name, name4)

// 8. Kiểm tra số n có toàn số lẻ tạo thành hay không? VD1: n=1234, output: ‘NO’
// var n = 234555555555555555566665;
// var check2 = true;
// while(n>0){
//     var remain = n % 10;
//     console.log("remain", remain)
//     if(remain % 2 == 0){
//         check2 = false;
//         break;
//     }
//     n = Math.floor(n/10)   
// }
// alert(check2)

//  var hello = "hello 'world'"
//  var helloH = '"hello" \'Huyền\''
//  var helloK = `hello Khởi`
//  console.log(hello, helloH, helloK)

 //usage of template string
 function getIntroduce(name, age){
    //  var introduce = " I'm" + name + "and have age is" + age + "."
     var introduce = `I'm ${name} \n and \t have age is ${age}` // khai báo kiểu này dễ nhìn hơn
     return introduce
 }
 console.log(getIntroduce("Khoi", 25))

 //strings method
 var str = "Today is a beautiful day, is'nt it?"
 var substr ="day"
 console.log(`length: ${str.length}, charAt(0): ${str.charAt(0)}, toUppercase(): ${str.toUpperCase()}, toLowerCase: ${str.toLocaleLowerCase()},
  indexOf("day): ${str.indexOf(substr)},
  lastIndexOf("day"): ${str.lastIndexOf(substr)},
  slice(0,4): ${str.slice(0,5)}, slice(6): ${str.slice(0,5)}
  substring(0,5): ${str.substring(0,5)}, substr(0, 5): ${str.substr(0,5)},
  concat: ${str.concat(substr)},
  include("day"): ${str.includes(substr)},
  replace: ("beautiful", "good"): ${str.replace("beautiful", "good")} 
  `)// charAt(0) = x[0], indexOf: tìm xem giá trị của substr là day có trong chuỗi trên k vad ở vị trí nào
  //slice(0,4): ${str.slice(6) lấy bắt đầu từ 6 đến hết độ dài chuỗi}, concat: ghép chuỗi, include ktra xem có đúng nó ở vị trí đó k
  
  
  function myReplace(str, oldStr, newStr){
      var pos = str.indexOf(oldStr)
      if(pos === -1){// ktra xem có khác phạm vi không
        return str;
      }
      str = str.slice(0, pos) + "good" + str.slice(pos + oldStr.length)
      return(str);  
  }
  console.log("str:", myReplace(str, "beautiful", "good"))

  //trim() bỏ hết dấu cách 2 phía của 1 str )
  function validateName(name){
      name = name.trim()
    //   while(name.includes("  ")){// tìm kiếm xem có 2 dấu cách chuyển về 1 dấu cách
    //       name = name.replace("  ", " ")
    //   }
    name = name.replace(/\s+/g," ") // di chuyển all nhiều hơn 2 dấu cách thành 1 dấu cách
      return name
  }
  var userName = "            Dinh     Xuan      Tien    "
  // console.log("trim>" + userName.trim()+"<")
  console.log("validateName:>"+ validateName(userName)+"<")
  


  function WordCount(str) {
    var total = 0;
    // for (var i = 0; i < str.length; i++)
    //   if (str(i) === " ") { // if a space is found in str
    //     total = total + 1; // add 1 to total so far
    // }
    return total; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
  }
  
  console.log(WordCount(“ Hello  world”));