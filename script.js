function addExpense(){

let name=document.getElementById("name").value
let amount=document.getElementById("amount").value

let list=document.getElementById("list")

let li=document.createElement("li")

li.innerText=name+" - $"+amount

list.appendChild(li)

}

function addInvestment(){

let stock=document.getElementById("stock").value
let value=document.getElementById("value").value

let list=document.getElementById("investments")

let li=document.createElement("li")

li.innerText=stock+" - $"+value

list.appendChild(li)

}

function updateGoal(){

let total=document.getElementById("goalTotal").value
let now=document.getElementById("goalNow").value

let percent=(now/total)*100

document.getElementById("progress").style.width=percent+"%"

}

function saveDiary(){

let text=document.getElementById("diary").value

localStorage.setItem("diary",text)

}
