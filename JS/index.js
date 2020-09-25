function calculateInsurance () {
	var a = document.getElementById("name").value;
	
	var b = parseInt(document.getElementById("age").value);

	var c = document.getElementById("country").value;

	var d = parseInt(document.getElementById("HP").value);

	var cost

if (c=="Austria"){
	cost = d*100/b+50;
		
	} else if(c=="Hungary"){
	cost= d*120/b+100;
		
	} else {
	cost = d*150/(b+3)+50;
		
	}

	
console.log((typeof a)+ " " + a);
console.log((typeof b)+ " " + b);
console.log((typeof c)+ " " + c);
console.log((typeof d)+ " " + d);
console.log((typeof cost)+ " " + cost);
document.getElementById('result').innerHTML= a + " your insurance costs are " +cost + " €";
return (cost)
	

}

document.getElementById("myButton").addEventListener("click",calculateInsurance,false);


/*	
switch (d) {
		case 'Austria':
			var cost = d*100/b+50;
			break
		case 'Hungary':
			var cost = d*120/b+100;
			break
		default:
			var cost = d*150 / (b+3) +50;
	}
	console.log(cost)

if (c="Austria"){
		document.getElementById("result").innerHTML = parseInt(d) * 100 / parseInt(b) +50;
	} else if(c="Hungary"){
		document.getElementById("result").innerHTML = parseInt(d) * 120 / parseInt(b) +100;
	} else {
		document.getElementById("result").innerHTML = parseInt(d) * 150 / (parseInt(b)+3) +50;
	}*/