// 4. Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?
// VD: n = 10, output: 2 3 5 7

function isPrime(n){
    console.log("Các số nguyên tố trong khoảng từ 1 đến "+n)
    if(n <2){
        console.log("không có số nguyên tố nào cả")
        
    }else{
        console.log(2)
        for(var i = 3; i <= n; i++ ){
            
            for(var j=2; j < Math.sqrt(i); j++){
                if(i % j === 0){
                return 0;
                  
                }
            console.log(i)   
            }
                  
        }
     
    }
    
    
}
var isPrimeNumber = isPrime(1)
