
        function updateText(){
            document.getElementById("p1").innerHTML = "Modabbir Mohammad Mansur";
        }


        function updateList(){
            let ul = document.getElementById("list1");
            let li = document.createElement("li");
            li.innerText = "Coke"
            ul.appendChild(li);
        }


        function inputAlert(){

            let value = document.getElementById("inp1").value;
            alert(value);

        }
