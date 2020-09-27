// Function for calculating Insurance

function calculateInsurance() {
  // defining html container for grabbing values
  var a = document.getElementById("name").value;

  var b = parseInt(document.getElementById("age").value);

  var c = document.getElementById("country").value;

  var d = parseInt(document.getElementById("HP").value);
  // if statement for different calculating methods based on Country
  if (c == "Austria") {
    cost = Math.round((d * 100) / b + 50);
  } else if (c == "Hungary") {
    cost = Math.round((d * 120) / b + 100);
  } else {
    cost = Math.round((d * 150) / (b + 3) + 50);
  }
  //if statement to give out message if needed values ar not integers
  if (isNaN(cost)) {
    document.getElementById("result").innerHTML = "Please enter valid Values.";
  } else {
    document.getElementById("result").innerHTML =
      a + " your insurance costs are " + cost + " €";
  }
}
//adding eventlistener to button for executing Function calculateInsurance on click
document
  .getElementById("myButton")
  .addEventListener("click", calculateInsurance, false);
