
// 2. Viết chương trình in ra các số lẻ từ 1 đến n?
// VD: n = 10, output: 1 3 5 7 9

function sole(n){
    console.log("các số lẻ từ 1 đến " + n)
    for(i=1; i <= n; i++){
        if(i%2 != 0 ){
            console.log(i)
        }
    }
}
var number = sole(10)