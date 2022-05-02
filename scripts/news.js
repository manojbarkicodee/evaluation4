// Ude Import export (MANDATORY)
import navbar from"../components/navbar.js"
document.querySelector("#navbar").innerHTML=navbar()

let data=JSON.parse(localStorage.getItem("news"))
let append=(el)=>{
    let container=document.querySelector("#news")
    container.innerHTML=""
    // data.map((el)=>{
let box=document.createElement("div")
let box1=document.createElement("div")
let box2=document.createElement("div")
let img=document.createElement("img")
let para1=document.createElement("p")
let para2=document.createElement("p")
img.src=el.urlToImage
para1.innerText=el.title
para2.innerText=el.description
// box.addEventListener("click",function(){
//     news(el)
// // })
// box1.append(img)
box2.append(para1,para2)
box.append(box1,box2)
container.append(box)
    // })

}
append(data)
