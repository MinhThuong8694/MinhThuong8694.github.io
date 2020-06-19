// //ajax-json
// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//        document.getElementById("demo").innerHTML = this.responseText;
//     // console.log(this.responseText)
//       }
//     };
//     xhttp.open("GET", "https://5e8e421f22d8cd0016a7a062.mockapi.io/api/v1/users", true);
//     xhttp.send();
//   }
//   loadDoc()


//class
class Person{
    constructor(lastName, firstName){
        // this.name = name;
        this.lastName = lastName
        this.firstName = firstName
        this.name = firstName + " " + lastName;
        // this.go = this.go.bind(this)
    }
    // go = function(){
    //     console.log(this.name + "is going.....")
    // }.bind(this)

    go = () =>{
        console.log(this.name + "is going.....")
    }
}

var person = new Person("Thuong", "Nguyen Thi");
var person2 = new Person("Thai", "Nguyen Van");
console.log("Person: ", person)
person.go()
console.log("go function:", person.go)// định nghĩa function.., muốn gọi function phải go()
console.log("Person2: ", person2)
person2.go()

// var gogo = person.go.bind(person2);//  khi gán ntn phải thêm bind(person2). this sẽ trỏ vào person còn k nó sẽ bị lỗi k xác định đc
//   gogo()
var gogo = person.go;// ở trên đã khai báo this trực tiếp trên method go nên k cần thêm bind(person2)
  gogo()

  function someoneGoing(go) {

    // some another tasks...
      go()

  }
  someoneGoing(person.go)

//inherit: kế thừa
class Doctor extends Person{
    constructor(lastName, firstName, degree){
        super(lastName,firstName);
        this.degree = degree;
    }
}

class Developer extends Person{
    constructor(lastName, firstName, languages){
        super(lastName,firstName);
        this.languages = languages;
    }

}

var doctor = new Doctor("Chinh", "Nguyen Tien", "Dentist")
console.log("doctor: ", doctor)
var developer = new Developer("Thinh", "Tran Dang", ["html", "css", "java", "javascript"])
console.log(developer)

class Hacker extends Developer{
    constructor(lastName, firstName, languages, hst){
        super(lastName,firstName);
        this.hst = hst;
    }
    go = ()=>{
        console.log("Hacker" + this.name + "is going........")
    }

}

var hacker = new Hacker("Minh", "Tran Dang", ["c/c++", "Assembly"])
console.log(hacker)
hacker.go()

// advance
// var x = 5;  // var có thể định nghĩa đc 2 lần còn let thì k
// var x = 6;

let x = 5;
// let x = 6; // k đc khai báo 2 lần, chỉ đc gán thôi
x = 6;
console.log("x: ", x)

{
    var y = 5;// var bị giới hạn trong function và global. do đây k phải là function nên vẫn hoạt động đc
    let z = 6; // bị lỗi do let chỉ hoạt động trong phạm vi { }gần nhất 
}
console.log("y: ", y)
// console.log("z: ", z)

function test(){
    console.log("t: ", t)
    // var t =5; // nếu console trc xong mới khai báo nó sẽ chạy như sau: var t -> console -> t =5; ra k xác định
    // let t = 5;// let sẽ bị lỗi tại nó k chạy đc như var
}


//passing agrument to a function
function check(number){
    var number = 3;
    var name = "Thai"

}
var number =5;
var name = "chinh"
check(number, name);
console.log("number:", number);
console.log("name", name)


//var obj ={number: number, name: name}
console.log("obj: ", )