let products=[["Apple", 2.4],["Banana", 1.8], ["Cherry", 3],["Peach",1.2],["Watermelon", 0.7],["Melon", 1],["Plum", 3,2]]
let container = document.querySelector(".productContainer") 

   
let hito = document.querySelector(".hito")
let lowto = document.querySelector(".lowto");
let atoz = document.querySelector(".atoz");
let ztoa = document.querySelector(".ztoa");
let filter = document.querySelector(".filter");
let min = document.querySelector(".min")
let max = document.querySelector(".max")
//console.log(lowto)

products.map(item =>{
    let box = document.createElement("div")
    container.appendChild(box)
    box.classList.add("box")
    let name = document.createElement("h5")
    name.innerHTML = "product name: " + item[0]
    box.appendChild(name)
    let price = document.createElement("h5")
    price.innerHTML = "product price: " + item[1]
    box.appendChild(price)
}) 



//let prices = item[1]
//arrPrice.push(prices)

lowto.addEventListener("click", function(){
    container.innerHTML = " ";
    let arrPrice = products.sort(function(a,b){
        return a[1]-b[1];
    })
    //console.log(arrPrice)
    arrPrice.map(item =>{
        //console.log(item)
    let box = document.createElement("div")
    container.appendChild(box)
    box.classList.add("box")
    let name = document.createElement("h5")
    name.innerHTML = "product name: " + item[0]
    box.appendChild(name)
    let price = document.createElement("h5")
    price.innerHTML = "product price: " + item[1]
    box.appendChild(price)
    })
})

hito.addEventListener("click", function(){
    container.innerHTML = " ";
    let arrPrice1 = products.sort(function(a,b){
        return b[1]-a[1];
    })
    console.log(arrPrice1)
    arrPrice1.map(item =>{
        console.log(item)
    let box = document.createElement("div")
    container.appendChild(box)
    box.classList.add("box")
    let name = document.createElement("h5")
    name.innerHTML = "product name: " + item[0]
    box.appendChild(name)
    let price = document.createElement("h5")
    price.innerHTML = "product price: " + item[1]
    box.appendChild(price)
    })
})
console.log(products)


atoz.addEventListener("click", function(){
    container.innerHTML = " ";
    let arrPrice2 = products.sort(function(a,b){
        return (a[0]>b[0])-(a[0]<b[0]);
    })
    arrPrice2.map(item =>{
    let box = document.createElement("div")
    container.appendChild(box)
    box.classList.add("box")
    let name = document.createElement("h5")
    name.innerHTML = "product name: " + item[0]
    box.appendChild(name)
    let price = document.createElement("h5")
    price.innerHTML = "product price: " + item[1]
    box.appendChild(price)
    })
})
    
ztoa.addEventListener("click", function(){
    container.innerHTML = " ";
    let arrPrice2 = products.sort(function(a,b){
        return (a[0]<b[0])-(a[0]>b[0]);
    })
    arrPrice2.map(item =>{
    let box = document.createElement("div")
    container.appendChild(box)
    box.classList.add("box")
    let name = document.createElement("h5")
    name.innerHTML = "product name: " + item[0]
    box.appendChild(name)
    let price = document.createElement("h5")
    price.innerHTML = "product price: " + item[1]
    box.appendChild(price)
    })
})
// let minVal = min.value
// let maxVal = max.value


filter.addEventListener("click", function(){
    
    container.innerHTML = " ";
    let arrPrice3 = products.filter(item =>{
        return item[1]>min.value && item[1]<max.value
            
        
    })
  
    arrPrice3.map(item =>{
        let box = document.createElement("div")
        container.appendChild(box)
        box.classList.add("box")
        let name = document.createElement("h5")
        name.innerHTML = "product name: " + item[0]
        box.appendChild(name)
        let price = document.createElement("h5")
        price.innerHTML = "product price: " + item[1]
        box.appendChild(price)
        })
})
console.log(min);    