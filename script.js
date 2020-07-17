var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var li = document.getElementsByTagName("li");


function listLength(){
	return li.length;
}

function deleteButton(){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("delete"));
	li[i].appendChild(btn);
	btn.onclick = removeParent;
}

for (i=0; i<listLength(); i++){
	deleteButton();
}

function removeParent(event){
	event.target.parentNode.remove();
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("delete"));
	li.appendChild(btn);
	btn.onclick = removeParent;

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function togglesDone(event){
	//selects element that got clicked
	var target = event.target;
	//toggles class "done" 
	target.classList.toggle("done");
}


ol.addEventListener("click", togglesDone);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);