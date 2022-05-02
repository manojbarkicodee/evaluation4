// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from"../components/navbar.js"
document.querySelector("#navbar").innerHTML=navbar()
let input1=document.querySelector("#search_input")

input1.addEventListener("input",function(){
    window.location.href="search.html"
})
let input;
let data="https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"

let naya=async ()=>{
    try{
    data=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${input}`)
  let  data1=await data.json()
  console.log(data1.articles)
  append(data1.articles)
}catch(err){
console.log(err)
}

}
let naya1=async ()=>{
    try{
    data=await fetch(data)
  let  data1=await data.json()
  console.log(data1.articles)
  append(data1.articles)
}catch(err){
console.log(err)
}

}
naya1(data)


let append=(data)=>{
    let container=document.querySelector("#results")
    container.innerHTML=""
    data.map((el)=>{
let box=document.createElement("div")
let box1=document.createElement("div")
let box2=document.createElement("div")
let img=document.createElement("img")
let para1=document.createElement("p")
let para2=document.createElement("p")
img.src=el.urlToImage
para1.innerText=el.title
para2.innerText=el.description
box.addEventListener("click",function(){
    news(el)
})
box1.append(img)
box2.append(para1,para2)
box.append(box1,box2)
container.append(box)
    })

}


function news(el){
    console.log(el)
localStorage.setItem("news",JSON.stringify(el))
window.location.href="news.html"
}
let array=document.querySelector("#in").addEventListener("click",function(){
    input="in"
    naya(input)
})
let array1=document.querySelector("#ch").addEventListener("click",function(){
input="ch"
naya(input)
})
let array2=document.querySelector("#us").addEventListener("click",function(){
input="us"
naya(input)
})
let array3=document.querySelector("#uk").addEventListener("click",function(){
input="uk"
naya(input)
})
let array4=document.querySelector("#nz").addEventListener("click",function(){
input="nz"
naya(input)
})
// console.log(array)
