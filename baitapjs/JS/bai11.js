// // 11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?
// // VD: “ Hello  world”, output: 3
// function check(str){
//      var dem = 0;
//      while(str.inculdes(" ")){
//          dem = dem + 1;
//      }
//      return dem
// }

// console.log("số khoảng trắng trong chuỗi: "+ check(“ Hello  world”))

function WordCount(str) {
    var total = 0;
    for (var i = 0; i < str.length; i++)
      if (str(i) == " ") { // if a space is found in str
        total = total + 1; // add 1 to total 
      }
        return total; 
  }
  
  console.log(WordCount(“ Hello  world”));

