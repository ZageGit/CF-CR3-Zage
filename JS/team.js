var empl = JSON.parse(employees);
console.log(empl)

let nose =document.getElementById("container");

for (let i = 0; i< empl.length; i++){
	let head = document.createElement("div")
	nose.appendChild(head);
	head.setAttribute("class","teamcard"+ i);
	head.addEventListener('click',expand,false)
	head.innerHTML = ` <img class="teamimg${[i]}" src='${empl[i].image}'`+ '<br>' + '<p>' + empl[i].name +'</p>'+ '<p>' + empl[i].email +  '</p>' + "<div id=moreInfo"+i+">"+"</div>";
	}

	function expand(x) {
	document.getElementById("moreInfo" + x).innerHTML = `<p>name: ${empl[x].name} </p><p>E.Mail: ${empl[x].email}`;
	}



/*	el.style.backgroundColor = 'grey';
}
var el =document.getElementsByTagName("teamcard")
var elementNode = document.querySelectorAll(".teamcard");
*/


