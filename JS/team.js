console.log(employees)
console.log(employees.length)

let nose =document.getElementById("container");


for (let i = 0; i< employees.length; i++){
	let head = document.createElement("div")
	head.innerText = employees[i];
	nose.appendChild(head);
	nose.setAttribute("class","teamcard")
	
}
