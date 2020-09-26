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
	document.getElementById("moreInfo" + x).innerHTML = `<p>Hobby: `+ empl[x].hobby + `</p><p>Age ${empl[x].age}`;
	document.getElementById('teamcard'+x).style.width = "60%";
    
	}

	function close(y){
    document.getElementById("moreInfo" + y).innerHTML = "";
    document.getElementById('teamcard'+y).style.width = "30%";
    
}

let test = 2;

for (let i = 0; i < empl.length; i++) {
    document.getElementById("teamcard" + i).addEventListener("click", function () {
        if(test % 2 == 0){  
            expand(i);
            test++;     
        }else {
            close(i);
            test++;    
        }
        
    }, false);
}
