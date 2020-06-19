// console.log("Hello class")
// alert("Hello world")
// var helloWorld ="Hello world! 2002e"
// let helloWorld2 = "Hello world"
// const helloWorld3 = "Hello world"
// helloWorld3 ="hello3"
// helloWorld2 = "hello"
// console.log(helloWorld2)
// console.log(helloWorld3)
// // var, let, const đều định nghĩa 1 biến tuy nhiên dùng const không đc gán giá trị do const là hằng, và dùng const phải có hàm khởi tạo giá trị
// var number = 6;
// console.log(helloWorld, typeof(helloWorld))
// console.log(number, typeof(number))
// var x;
// var object = null
// console.log(x)
// console.log(object)
// //  caculate timer
// var space = 120 + 100 -60;
// var velocity = 20
// var timer = space/velocity;
// console.log(timer, "hours")
// console.log(9%5)
// var hello = "hello" + "     " + "world"
// console.log(hello)

var mix = 5 + 5;
var mix1 = "5" +"5"
var mix2 = "5" + 5
var mix3 = 5+"5"
var mix4 = 5-"10"
var mix5 = "a"-5
console.log( mix4, typeof(mix4), mix5, typeof(mix5))
// // mix
// var mix = 5 - "hdsh5" 
// // có số cộng chuỗi ưu tiên chuỗi
// console.log("Mix: ", mix)
// var i = 0;
// i += 1; //<=> i = i + 1
// i -= 1;
// i *= 1;
// i /= 1;
// i = 0;
// console.log("i :",i);
// i++ // value tương đương i = i+1; cộng trc rồi gán
// i=0;
// var j =++i;
// ++i // value tương đương i = i+1;gán trước rồi cộng
// console.log("i = ",i,",j=",j)

// i = 3;
// j = 2;
// var k = i++ + i++ + ++i + ++i + --j + j;
// console.log("k=" ,k)
// //if
// var answer = prompt("is it rainning today:","NO")
// console.log("answer:", answer)
// var x = 5;
// x == 5; // ktra xem true hay false == so sánh value, === so sánh giá trị value và kiểu
// var isRainning == anser == "YES";
// // if(answer == "NO"){
// //     isRainning = false
// // }else{
// //     isRainning = true
// // }
// if(!isRainning){//! mang ý nghĩa đảo ngược lại 
//     alert("I'm going to school")
// }else{
//     alert("I'm stay at home")// chỗ này tự động làm mờ chỉ nó chỉ vào true
// }

// var mark = prompt("enter your mark: ", 0)
// mark = Number(mark) // ban đầu mặc định kiểu là string nên đoạn này chuyển kiểu cho nó là number
// console.log("mark:", mark, typeof(mark))
    // mark [0,4) : bad,
    // mark [4,6) : medium, 
    // mark [6,8) : good,
    // mark [8,9) : very good,
    // mark [9,10] : excellent
// if (mark < 0 || mark > 10){
//     console.log("mark k là giá trị")
// }else if(mark <4){
//     console.log(" you're bad")
// }else if (mark <6){
//     console.log(" you're medium")
// }else if(mark <8){
//     console.log(" you're good")
// }else if(mark <9){
//     console.log(" you're very good ")
// }else( mark <=10){
//     console.log(" you're excellent")
// }

// var month = prompt("enter month: ", 0)
// month = Number(month);
// switch(month){
//     case 1:
//     case 2:
//     case 3:
//         console.log("spring")
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log("summer")
//         break; 

// }
// dùng switch cũng giống như if nhưng gọn hơn vì khi dùng đúng 1 biến thì đỡ phải khai báo nhiều

//for- while -do while
// for(;;){// lặp vô hạn
//     console.log(" i love you ")
// }
// for ( var i = 0; i<= 10; i++){
//     if(i%2 == 0){
//         console.log("i love u", i)
//     }

// }

// var n = 10;
// for ( var i = 0; i< n; i++){
//     for ( var j = 0; j < n; j++){
//         console.log("i love u", i, j)
//     }
//     if(i == 5){
//         break
//     }

// }

// for(;;){}
// while(true){}
// viết kiểu như này nó giống nhau for và while lặp vô hạn
// var i = 0;
// while(true){
//     if(i < n) {
//         console.log("i ", i)
//     }else{
//         break
//     }
//     i++;
// }
// var answer = prompt("Do you love me", "YES")
// console.log("answer", answer)
// while(true){
//     if (answer !== "YES"){
//         answer = prompt("Do you love me?", "YES")
//     }else{
//         alert("i love u, too");
//         break;
//     }
// }
// var answer = prompt("Do you love me", "YES")
// while(answer !== "YES"){
//     answer = prompt("Do you love me?", "YES") 
// }
// alert("i love u")

// var answer
// do{
//     answer = prompt("do u love me", "YES")
// }while(answer !== "yes")
// alert("i love you, too")

// var x = "234"
// var y = Number(x);
// Number.isNaN(y)
// console.log ("y",y)

//  var answer
//  var number
//  do{
//      answer = prompt("enter a number", "0")
//      number = Number(answer)
//  }while (Number.isNaN(number))// ktra xem có phải số hay chuỗi

//  if( number % 2 == 1){
//      alert("số lẻ")
//  }else{
//      alert("số chẵn")
//  }
//  alert("xin chao") 


 // nhập vào 1 số ktra xem n có phải số nguyên tố không? ví du 1: n = 10, output: no
 //vd 2: n =5, output: yes
 var number
 do{
     answer = prompt("enter a number", "0")
     number = Number(answer)
 }while (Number.isNaN(number))// ktra xem có phải số hay chuỗi
var isPrime = true; //giả sử cho nó là nguyên tố sau đó kiểm tra
if(number < 2){
    number = false;
}else{
    for(var i = 2; i <= Math.sqrt(number); i++ ){
        if(number % i === 0){
            isPrime = false;
            break;
        }
    }
}
alert(isPrime)


 