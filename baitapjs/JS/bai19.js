// 19.  Hãy tính tổng các số từ 1 đến n mà không dùng for, while loop? (đệ quy, recursive)
// VD: total(9) => output: 45


function recursive(n){

    if(n = 0){
        return 0;
    }else{
        return n + recursive(n-1);
    }
}

console.log(recursive(5))

