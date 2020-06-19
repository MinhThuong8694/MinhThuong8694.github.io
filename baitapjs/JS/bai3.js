// Viết chương trình in ra các số chẳn từ 1 đến n?
// VD: n = 10, output: 2 4 6 8 10
function sole(n){
    console.log("các số chẵn từ 1 đến " + n)
    for(i=1; i <= n; i++){
        if(i%2 == 0 ){
            console.log(i)
        }
    }
}
var number = sole(10)