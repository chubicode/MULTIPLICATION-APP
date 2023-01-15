const num1 = Math.floor(Math.random()*10)
const num2 = Math.floor(Math.random()*10)
const formEl = document.getElementById("form")
let score = JSON.parse(localStorage.getItem("score"))
if (!score){
  score = 0 
}
const scoreEl = document.getElementById("score")
scoreEl.innerText =`score: ${score}`

const inputEl = document.getElementById("input")
const questionEl = document.getElementById("question")
questionEl.innerText = `What is ${num1} multiply by ${num2}?`
const correctAns = num1 * num2


formEl.addEventListener("submit", function(){
const userAns = JSON. parse(inputEl.value)
if (userAns === correctAns){
  score ++
  updateLocalStorage()
}else {
  score --
  updateLocalStorage()
}
})

function updateLocalStorage(){
  localStorage.setItem("score", JSON.stringify(score))
}