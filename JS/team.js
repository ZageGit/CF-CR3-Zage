var empl = JSON.parse(employees);
console.log(empl)


let nose =document.getElementById("container");

for (let i = 0; i< empl.length; i++){
	let head = document.createElement("div")
	nose.appendChild(head);
	head.setAttribute("id","teamcard"+ i);
	head.innerHTML = ` <img id="img${[i]}" src='${empl[i].image}'`+ '<br>' + '<p>' + empl[i].name +'</p>'+ '<p>' + empl[i].email +  '</p>' + "<div id=moreInfo"+i+">"+"</div>";
	}

	function expand(x) {
	document.getElementById("moreInfo" + x).innerHTML = `<p>name:`+ empl[0].name + `</p><p>E.Mail: ${empl[0].email}`;
	document.getElementById('teamcard'+x).style.width = "30em";
    document.getElementById('teamcard'+x).style.height = "24em";
	}

	function close(y){
    document.getElementById("moreInfo" + y).innerHTML = "";
    document.getElementById('teamcard'+y).style.width = "15em";
    document.getElementById('teamcard'+y).style.height = "12em";
}

let test = 2;

for (let i = 0; i < empl.length; i++) {
    document.getElementById("teamcard" + i).addEventListener("click", function () {
        //this if statment makes sure, that we can repeat the event also after it has been executed x ammounts of time
        if(test % 2 == 0){  
            expand(i);
            test++;     //will add +1 to the test value making it uneven 
        }else {
            close(i);
            test++;     //makes it even again, there fore the for function can be executed again
        }
        
    }, false);
}
