function calculateInsurance () {
	var a =document.getElementById("name").value;
	
	var b =document.getElementById("age").value;

	var c = document.getElementById("country").value;

	var c = document.getElementById("HP").value;

	document.getElementById("result").innerHTML = "hy i am" + a + " and i am " + b + " years old" 

	
}
document.getElementById("submit").addEventListener("click",calculateInsurance,false);
