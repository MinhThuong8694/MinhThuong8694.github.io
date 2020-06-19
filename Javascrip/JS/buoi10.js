var numbers =[1,6,3,5,8,7]
function findNumber(value){
    if(value % 2 === 0){
        return true;
    }
    return false
}

var foundNumber = numbers.find(findNumber)
// console.log(foundNumber)
// filter all even number
var evenNumber = numbers.filter((value)=>{
    console.log(value)
    return value % 2 === 0})
//true lấy biến đó cho vào cái mới
console.log("evenNumber: ", evenNumber) //evenNumber: số chẵn
// filter khi có quá nhiều data



//map, reduce, concat, sort
var thai ={
    id: 1,
    firstName: "Luu Quang",
    lastName: "Thai",
    class: "JAVA"
}
var thinh ={
    id: 2,
    firstName: "Tran Dang",
    lastName: "Thinh",
    class: "JAVA"
}
var minh ={
    id: 3,
    firstName: "Tran Dang",
    lastName: "Minh",
    class: "JAVA"
}
thinh.age = 26 // với trường hợp object như này nếu chưa có thì thêm vào có rồi thì chèn lên
var students = [
    thai, thinh, minh
]

// console.log("students",students)
// var newStudents = students.map((students) =>{
//     console.log("calling")
//     return {
//         id: students.id,
//         fullName: students.firstName + "" + students.lastName,
//         class: students.class
//     }})
// //return về cái gì thì đẩy về array mới
// console.log("newStudent: ", newStudents)


// var newStudents = students.map((student) =>{
//     // var newStudent = new Object(student)
//     // var newStudent = {...student}
//     // 2 lệnh var trên và dưới giống nhau là cùng thêm 1 object mới, cú pháp 3 chấm mang ý nghĩa là dàn trải
//     return {...student,
//     fullName: student.firstName + "" + student.lastName}
    
// //return về cái gì thì đẩy về array mới
// console.log("newStudent: ", newStudents)

numbers.push(8)
numbers.unshift(2)
console.log("Numbers:", numbers)
//reduce
var result = numbers.reduce((previousTotal,value)=> {
var total = previousTotal + value ;
console.log(previousTotal,value, total)
return total
},0)
console.log(result)


//sort
// var studentsName = ["thuong", "huyen", "thinh", "nga"]
// var sortStudentName = studentsName.sort()
// console.log("sortStudentName: ",sortStudentName)

// var studentsName = ["thuong", "huyen", "thinh", "nga"]
// var sortStudentName = studentsName.sort((a,b)=> {
//     if(a>b){
//         return -1
//     }else if(a<b){
//         return 1
//     }
//     return 0
// })
// console.log("sortStudentName: ",sortStudentName)

// numbers.push(20)
// var sortNumbers = numbers.sort()
// console.log("sortNumber: ", sortNumbers)
// so sánh theo kiếu string

// numbers.push(20)
// var sortNumbers = numbers.sort((a,b) => {
//     return b-a
// })
// console.log("sortNumber: ", sortNumbers)

// console.log("Concat: ", sortNumbers.concat(sortStudentName))

// //=================
// //(1)<=> (2)
// //for of dùng tring array
// for(var student of sortStudents){
//     console.log("student:", student);
//     //(1)
// }

// for(var i = 0; i <= sortStudents.length; i++){
//     var student = sortStudents[i];
//     //(2)
// }

//object
var car ={
    name: "Vin",
    modal: "2020",
    weight: 900,
    start: function(){
        console.log(this.name +"starting....")
    }
}
function updateCar(car, prop, value){
    car[prop] = value
}
updateCar(car,"name", "vinfastt2")
updateCar(car, "model", "2022")

car.country = "VietNam"
car.stop = function(){
    console.log(this.name +"stopping....")
}
console.log("car name:",car.name,car["name"], car.country)
// car.start()
car["start"]()
// 2 cách gọi start trên giống nhau
car.stop()

function printObj(obj){
    for(var prop in obj){
        if(typeof obj[prop] !== "function"){
            console.log(prop)
            console.log("prop: ", prop,", data:", obj[prop])
        }else{
            obj[prop]()
        }
        
    }
}
printObj(car)
printObj(thai)

//function object
function Car(year, weight, model){
    this.year = year;
    this.weight = weight;
    this.model = model
    this.start = function(){
        console.log(this.model + "starting....")
    }
}
var myCar = new Car("2020", 850, "Phone")
var myCar2 = new Car("2021", 950, "IPhone")
console.log(myCar)
console.log(myCar2)

myCar.start()
window.model="Windowmodel"
var car2Start = myCar2.start.bind(myCar)
car2Start()
myCar2.start()