// 12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
// VD: “	Hello world   ”, output: “Helloworld”
function validateName(str){
    str = str.replace(/\s/g, ''); 
    return str
}

console.log("validateName:>"+ validateName("            Dinh    \n Xuan  Tien    ")+"<")