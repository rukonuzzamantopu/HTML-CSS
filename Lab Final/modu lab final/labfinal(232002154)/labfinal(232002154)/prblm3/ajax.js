
var btn = document.getElementById("btn");
var stuContainar = document.getElementById("student-info");

btn.addEventListener("click", function () {

    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "data.json");
    ourRequest.onload = function () {
      var ourData = JSON.parse(ourRequest.responseText);
      student_data(ourData);
    };
    ourRequest.send();

});


function student_data(data) {
    var readData = "";
  
    for (i = 0; i < data.length; i++) {
      readData += "<p> ID: " + data[i].ID + " Name: " +data[i].Name + " Age: " + data [i].Age + "</p>";
      }
    stuContainar.insertAdjacentHTML("beforeend", readData);
  }
  
  
