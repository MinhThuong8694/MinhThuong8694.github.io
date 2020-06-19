// 14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.
// VD: s1: , s2: “is” => output: 2
var s1 = "This is a beautiful day";
var s2 = "s";
function checkStr(str){
    return str.indexOf("is");
}

console.log(`Vị trí xuất hiện của ${s2} trong ${s1} : ${checkStr(s1)}`)
