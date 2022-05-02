// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from"../components/navbar.js"
document.querySelector("#navbar").innerHTML=navbar()
let id;
let container=document.querySelector("#results")
// let url=https://masai-mock-api.herokuapp.com/news?q={query} 
let input=document.querySelector("#search_input")
let search= async()=>{
try{
 
let data=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${input.value}`)
let  data1=await data.json()
// console.log(data1)
return data1.articles
// append(data1.articles)
}catch(err){
    console.log(err)
}
}

let append=(data)=>{
    let container=document.querySelector("#results")
    container.innerHTML=""
    data.map(({urlToImage,title,description})=>{
let box=document.createElement("div")
let box1=document.createElement("div")
let box2=document.createElement("div")
let img=document.createElement("img")
let para1=document.createElement("p")
let para2=document.createElement("p")
img.src=urlToImage
para1.innerText=title
para2.innerText=description
box1.append(img)
box2.append(para1,para2)
box.append(box1,box2)
container.append(box)
    })

}

// let main=async ()=>{
// let data=await search()
// console.log(data)
// append(data)
// }
let main=async ()=>{
    try{
        
    let data=await search()
    if(data==undefined){
        return false;
    }
    // container.innerHTML=""
    append(data)
    }catch(err){
        console.log(err)
    }
}
let debounce=(main)=>{
    
    console.log(id)
    if(id){
        clearTimeout(id)
    }
id=setTimeout(function(){
    if(input.value==""){
        container.innerHTML=null
        return false
    }
    else{
main()
    }
},1000)

}
input.addEventListener("input",function(){
    console.log("hello")
    // search()
    debounce(main)
    
})

