// 15. Viết chương trình chuẩn hóa họ tên.
// VD: “NguyeN THI tho tHu hA”, output: “Nguyen Thi Tho Thu Ha”
function name(str){
    firstLowerCaseStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    for(i=1; i < firstLowerCaseStr.length -1; i++){
        if(firstLowerCaseStr[i] == " "){
            firstLowerCaseStr[i+1] = firstLowerCaseStr[i+1].toUpperCase();
            //sai do k thể gán
        } 
          
    }
    return firstLowerCaseStr;


}
console.log(name("NguyeN THI tho tHu hA"))



// str2 = "avve"
// str[2] = str[2].toUpperCase()
// console.log(str2)

// // cách 1:
// let name = 'NguyeN THI tho tHu hA';
//     let arr = name.toLocaleLowerCase().split(/\s+/);
//     let i = 0;
//     for (s of arr) {
//         s = s[0].toUpperCase() + s.slice(1);
//         console.log(s)
//         // arr[i++] = s;
//     }
//     console.log('arr: ', arr.join(" "));


// //cách 2: đẩy từng phần tử của s vào 1 array mới
//     let name = 'NguyeN THI tho tHu hA';
//     let arr = name.toLocaleLowerCase().split(/\s+/);
//     let nameArr = [];
//     for (s of arr) {
//         s = s[0].toUpperCase() + s.slice(1);
//         nameArr.push(s);
//     }
//     console.log('nameArr: ', nameArr.join(" "))