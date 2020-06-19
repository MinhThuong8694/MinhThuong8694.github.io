// 6. Viết chương trình tính tổng bình phương của các số từ 1 đến n?
// VD: n = 3, output: 14
var n = 4; 
var t = 0;
for( var i =1; i <= n; i++){
    t = t + i**2;
}
console.log("tổng bình phương các số từ 1 đến " + n +":", t)