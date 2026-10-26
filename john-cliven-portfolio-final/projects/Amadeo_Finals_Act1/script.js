const var1 = document.getElementById("name")
const var3 = document.getElementById("surpise")


textbox1.addEventListener("input", function(){
    var1.innerHTML = "" + textbox1.value
})

const btn1 = document.getElementById("btn1")
btn1.addEventListener("mouseover", function() {
    btn1.style.backgroundColor = "Gray"
})
btn1.addEventListener("mouseout", function() {
    btn1.style.backgroundColor = "White"
})

btn1.addEventListener("click", function() {
    var1.innerHTML = "Welcome!!!!!"
    var1.style.color = "Red"
})

const btn2 = document.getElementById("btn2")
btn2.addEventListener("mouseover", function() {
    btn2.style.backgroundColor = "Gray"
})
btn2.addEventListener("mouseout", function() {
    btn2.style.backgroundColor = "White"
})

btn2.addEventListener("dblclick", function() {
    var1.innerHTML = "Fahhhhhhhhhhhhhh"
    var1.style.color = "Red"
})


const btn3 = document.getElementById("btn3")
btn3.addEventListener("mouseover", function() {
    btn3.style.backgroundColor = "Gray"
})
btn3.addEventListener("mouseout", function() {
    btn3.style.backgroundColor = "White"
})

btn3.addEventListener("click", function() {
    back.style.backgroundColor = "Red"
})











