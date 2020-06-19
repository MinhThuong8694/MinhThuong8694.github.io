
// 16. Viết chương trình lấy  id name của fb.
// VD: “https://www.facebook.com/ngothucdat”, output: “ngothucdat”

function linkFB(link){
    arrLink = link.split("/")
    return arrLink[arrLink.length -1]
}

console.log(linkFB("https://www.facebook.com/ngothucdat"))