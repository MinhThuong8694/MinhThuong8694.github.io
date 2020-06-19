var fruits = ['Apple', 'Banana', 'Orange', 'lemon']
// var number = [1,2,3,5,4]
// var mixed = ['Apple', 2, 'Banana', true, 'orange']

// var fruits2 = new Array('Apple', 'Banana', "Orange")
// console.log("fruits: ", fruits);
// console.log("fruits: ", number);
// console.log("fruits: ", mixed);

// console.log("first fruits: ", fruits[0]);
// console.log("last fruits: ", fruits[fruits.length -1]);
// console.log ("typeof(fruits): ", typeof(fruits))

// // get and remove the last element of array
// // var lastFruit = fruits[fruits.length -1]
// // fruits.length = fruits.length -1
// var lastFruit = fruits.pop()

// console.log(`last fruits: ${lastFruit}, fruits: ${fruits}`)
// get and remove the last element of array
var firstFruit = fruits[0]
for(var i=0; i< fruits.length -1; i++){
    fruits[i] = fruits[i+1];
}
fruits.length--;
// var firstFruit = fruits.shift()
console.log(`firstFruits: ${firstFruit}, fruits: ${fruits}
`)

// // array methods
// fruits.push("kiwi")
// fruits.push("Banana")
// fruits.push("Orange")
// //append to the first of array
// fruits.unshift("Cherry")
// console.log('fruits:', fruits)

// //indexOf, lastIndexOf, reverse, slice, splice, join
// var foundBanana = fruits.indexOf("Banana")
// var foundBanana2 = fruits.indexOf("Banana2") // khong co thi tra ve -1
// var foundLastBanana = fruits.lastIndexOf("Banana")
// console.log("foundBanana: ", foundBanana)
// console.log("foundBanana: ", foundBanana2)
// console.log("foundLastBanana: ", foundLastBanana)

// var subFruits = fruits.slice(1,3) // lay vi tri tu 1 den (3-1)
// var subFruits2 = fruits.slice(1,2)
// var subFruits3 = fruits.slice(1) // k co vế sau nó là 1 đến length-1
// var subFruits4 = fruits.slice(0)  // chạy từ 0 sẽ tạo 1 bản copy của ban đầu
// console.log("subFruits", subFruits)
// console.log("subFruits2", subFruits2)
// console.log("subFruits3", subFruits3)

// //tạo 1 bản copy xong đảo ngược nội dung trong bản copy còn dữ liệu trong bản ban đầu vẫn giữ nguyên
// var reverseFruits = fruits.slice(0).reverse()
// console.log(" reverseFruits: ", reverseFruits)
// console.log("fruits: ", fruits)

// //remote a element
// // fruits.splice(2,1)// bỏ đi ơ vị trí số 2 1 cái
// fruits.splice(fruits.indexOf("kiwi"),1)
// console.log('fruits', fruits)

// // insert element
// fruits.splice(2,0, "Watermelon","strawberry") //chèn vào vị trí số 2 và k xóa phần tử nào
// console.log("fruits:", fruits)
// fruits.splice(2,1, "Watermelon","strawberry")// chèn vào vị trí số 2 và xóa 1 phần tử
// console.log("fruits:", fruits)
// // hàm splice vừa remote vừa insert vừa replace

// //join
// console.log("join(,):", `[${fruits.join(" | ")}]`)

// //callback : gọi lại: là 1 function đc gọi trong 1 function khác
// function hello(callback, number){
//     console.log("number:", number)
//     callback()
// }
// function sayHelloClass () {
//     console.log("Hello class")
// }
// // sayHelloClass()
// hello(sayHelloClass, 123)


// var cherry = {
//     name: "Cherry",
//     price: 5
// }
// var Watermelon = {
//     name: "watermelon",
//     price: 5
// }
// var fruits = [cherry,
//      Watermelon,
//      {
//          name: "Banana",
//          price: 7
//         }
//     ]
// console.log("fruits", fruits)
// console.log("access property: watermelon.name: ", Watermelon.name) // lấy ra name của objeict Watermelon

// //find
// var findElem = function(item){
//     console.log("item:", item)
//     return item.name === "watermelon"
// }
// var findWatermelon = fruits.find(findElem)
// console.log("findBanana: ", findWatermelon)

// //rewrite array find
// function myFind(find){
//     for (var i = 0; i < fruits.length; i++){
//         var result = find(fruits[i]);
//         if (result){
//             return fruits[i]
//         }
//     }
// }
// console.log("fruits:", fruits)
