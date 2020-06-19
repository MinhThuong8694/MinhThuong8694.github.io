// 7. Tính tổng các số lẻ trong khoảng 1 đến n?
// VD: n = 5, output: 9
var n = 5; 
var t = 0;
for( var i =1; i <= n; i++){
    if(i % 2 != 0){
        t=t+i
    }
}
console.log("tổng các số lẻ trong khoảng từ 1 đến " + n +":", t)