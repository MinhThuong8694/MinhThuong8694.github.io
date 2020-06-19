// function greeting(){
//     console.log("Hello")
// }

// function say(greeting){
//     greeting()
// }
// say(greeting)


// //callback hell: gọi hàm lồng hàm, đồng bộ 2 việc bất đồng bộ. đồng bộ là xử lý theo thứ tự. bất đồng bộ là xử lý cùng nhau
// function cooking(){
//     console.log("Thinking...")
//     setTimeout(()=>{
//         console.log("Done thinking");
//         console.log("cooking rice")
//         setTimeout(()=>{
//             console.log("cooking rice done!")
//             console.log("start cooking fish")
//             setTimeout(()=>{
//                 console.log("cooking fish done!")
//             },2000)
//             console.log("start cooking soup")
//             setTimeout(()=>{
//                 console.log("cooking soup done!")
//             })
//         },3000)
//     },2000)
// }

// // c  ooking()
// console.log("Main thread")

//promise
var goodStudent = true;
var goodBoy = true

var buyCarCallback = (resolve, reject) => { //resole : đã thực hiện, reject: chưa thực hiện
    setTimeout(() => {
        if (goodStudent) {
            resolve({ name: "Vinfast" })
        } else {
            reject({ reason: "not good student" })
        }
        // resole("Vinfast") // resole({name: "Vinfast"})

    }, 2000)


}


var hangoutCallback = (resolve, reject) => {
    setTimeout(() => {
        if (goodBoy) {
            resolve({name:"hangout"})
        } else {
            reject({ reason: "failed" })
        }

    }, 3000)
}

// var buyCarPromise = new Promise(buyCarCallback);

// var buildHouseCallBack = (resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     }, 0)

// }

// buyCarPromise
//     .then((data) => {
//         console.log("Bought car:", data.name)// console.log("Bought car:", data.name)

//         var hangoutPromise = new Promise(hangoutCallback)
//         var buildHousePromise = new Promise(buildHouseCallBack)
//         return Promise.all([hangoutPromise, buildHousePromise])
//     })
//     // goodBoy = true;
//     // hangoutPromise.then(() => {
//     //     console.log("Have a girl friend")
//     // }).catch(() => {
//     //     console.log("Failed")
//     // })  
//     .then(() => {
//         console.log("Have a girl friend and house")
//     }).catch((data) => {
//         console.log("Reject: ", data.reason)
//     })


// // nếu thực hiện lời hứa hàm then sẽ đc thực hiện, không thì hàm catch thực hiện . chỗ này giống như cổng gọi.


//async: bất đồng bộ, await: chờ các tiến trình bất đồng bộ
async function myPromises(){
    var buyCarResolve = await new Promise(buyCarCallback)
    console.log("buy car done")
    var hangoutResolve = await new Promise(hangoutCallback)
    console.log("hangout done")
    console.log("All done:", buyCarResolve,hangoutResolve)
    // buyCarPromise.then(()=>{
    //     consol.log("buyCarPromise: ". buyCarPromise)
    // })
    // console.log("hangout...")   
}
myPromises()
console.log("My main thread")