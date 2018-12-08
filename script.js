var input = document.querySelector("#inputText");
var button = document.querySelector("#addItem");
var ul = document.querySelector("ul");
var body = document.querySelector("body");


function inputLength() {
	return input.value.length;
}

function createList() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var parent = ul.appendChild(li);
	parent.appendChild(createButtonDelete());
	input.value = "";


}
function createButtonDelete() {
	var buttonDelete = document.createElement("button");
	buttonDelete.className = "delete";
	buttonDelete.appendChild(document.createTextNode("Delete"));

	
	return buttonDelete;

}

function clickAddItem() {
	if(inputLength() > 0) {
		createList();
   
	}

}
function keypressAddItem(event) {
	if(inputLength() > 0 && event.keyCode === 13) {
      createList();

	}


}
function deleteListItem(event) {
	  if( event.target.className === "delete") {
	    	var liBig = document.querySelector("li");
	    	ul.removeChild(liBig);

	 	 
	    }

}

body.addEventListener("click", deleteListItem);
button.addEventListener("click", clickAddItem);
input.addEventListener("keypress", keypressAddItem);













