// Viết chương trình tính tổng từ 1 đến n?
// VD: n = 10, output: 55
var n = 10; 
var t = 0;
for( var i =1; i <= n; i++){
    t = t + i;
}
console.log("tổng các số từ 1 đến " + n +":", t)