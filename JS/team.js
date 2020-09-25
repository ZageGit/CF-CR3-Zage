let nose =document.getElementById("container");


for (let i = 0; i< employees.length; i++){
	let head = document.createElement("div")
	nose.appendChild(head);
	head.setAttribute("class","teamcard"+ i);
	head.addEventListener('click',expand,false)
	head.innerHTML = ` <img class="teamimg" src='${employees[i].image}'`+ "<br>" + '<p>' + employees[i].name +'</p>'+ '<p>' + employees[i].email +  '</p>' + "<div id=moreInfo"+i+"</div>";
	}

	function expand() {
	document.getElementById("moreInfo").innerHTML = `<p>Name: ${employees.name} </p>  
      <p>E-Mail: ${employees.email}</p>`;

}


/*	el.style.backgroundColor = 'grey';
}
var el =document.getElementsByTagName("teamcard")
var elementNode = document.querySelectorAll(".teamcard");
*/


