console.log(employees)
console.log(employees.length)
console.log(employees[0].name)

let nose =document.getElementById("container");



for (let i = 0; i< employees.length; i++){
	let head = document.createElement("div")
	nose.appendChild(head);
	head.setAttribute("class",employees[i].name);
	head.innerHTML = ` <img class="teamimg" src='${employees[i].image}'><br>`+ employees[i].name + "<br>" + employees[i].email;

	}

