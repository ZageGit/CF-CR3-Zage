let nose =document.getElementById("container");


for (let i = 0; i< employees.length; i++){
	let head = document.createElement("div")
	nose.appendChild(head);
	head.setAttribute("class","teamcard"+ i);
	head.addEventListener('click',expand,false)
	head.innerHTML = ` <img class="teamimg${[i]}" src='${employees[i].image}'`+ "<br>" + '<p>' + employees[i].name +'</p>'+ '<p>' + employees[i].email +  '</p>' + "<div id=moreInfo"+i+"</div>";
	}

	function expand(x) {
    document.getElementById("moreInfo" + [i]).innerHTML = `<p>name: ${employees[i].name} </p><p>E.Mail: ${employees[i].email}`;
      

}


/*	el.style.backgroundColor = 'grey';
}
var el =document.getElementsByTagName("teamcard")
var elementNode = document.querySelectorAll(".teamcard");
*/


