var empl = JSON.parse(employees);

let nose = document.getElementById("container");

/*Loop for creating div for each employee and adding image + name and email seperate <p>, as well as give them numbered ids */
for (let i = 0; i < empl.length; i++) {
  let head = document.createElement("div");
  nose.appendChild(head);
  head.setAttribute("id", "teamcard" + i);
  head.innerHTML =
    ` <img id="img${[i]}" src='${empl[i].image}'` +
    "<br>" +
    "<p>" +
    empl[i].name +
    "</p>" +
    "<p>" +
    empl[i].email +
    "</p>" +
    "<div id=moreInfo" +
    i +
    ">" +
    "</div>";
}
/*Expand function for teamcards making them bigger and adding additional information  (hobby + age) */
function expand(x) {
  document.getElementById("moreInfo" + x).innerHTML =
    `<p>Hobby: ` + empl[x].hobby + `</p><p>Age ${empl[x].age}`;
  document.getElementById("teamcard" + x).style.width = "60%";
}
/* Close Function for clearing the content which comes from the expand function and resizing to 30% */
function close(y) {
  document.getElementById("moreInfo" + y).innerHTML = "";
  document.getElementById("teamcard" + y).style.width = "30%";
}
/* creating variable for if statement */
let test = 2;

/* Loop for adding eventlistener to every div and if/else statement for expand/close indication  */
for (let i = 0; i < empl.length; i++) {
  document.getElementById("teamcard" + i).addEventListener(
    "click",
    function () {
      if (test % 2 == 0) {
        expand(i);
        test++; /* adds +1 to the test value = uneven*/
      } else {
        close(i); /*makes var test even again  */
        test++;
      }
    },
    false
  );
}
