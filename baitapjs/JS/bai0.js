//0. Viết chương trình kiểm tra n có phải là số nguyên tố hay không?
// VD1: n =10, output: NO
// VD2: n = 5; output: YES


function isPrime(number){
        var isPrime = true; //giả sử cho nó là nguyên tố sau đó kiểm tra
        if(number < 2){
            isPrime = false;
        }else{
            for(var i = 2; i <= Math.sqrt(number); i++ ){
                if(number % i === 0){
                    isPrime = false;
                    break;
                }
            }
        }
        return isPrime;
    }
    var isPrimeNumber = isPrime(2)
    alert(isPrimeNumber)