
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbox

function populateListProductChoices() {

	console.log("test");

var checkboxes = diet.getElementsByTagName("input");

var restrictions = [];

if (diet.getElementsByTagName("input")[0].checked) {
	restrictions.push(diet.getElementsByTagName("input")[0].value);
}
if (diet.getElementsByTagName("input")[1].checked) {
	restrictions.push(diet.getElementsByTagName("input")[1].value);
}
if (diet.getElementsByTagName("input")[2].checked) {
	restrictions.push(diet.getElementsByTagName("input")[2].value);
}
if (diet.getElementsByTagName("input")[3].checked) {
	restrictions.push(diet.getElementsByTagName("input")[3].value);
}
if (diet.getElementsByTagName("input")[4].checked) {
	restrictions.push(diet.getElementsByTagName("input")[4].value);
}

console.log(restrictions);

var optionArray = restrictListProducts(products, restrictions);

console.log(optionArray);

var radiobutton = document.createElement("input");
radiobutton.setAttribute("type", "radio");

for (i=0; i<optionArray; i++)
{
	 if (optionArray[i][0] == 1)
	 {
		 // pass to html in veg catergry
	 }
	 if (optionArray[i][0] == 1)
	 {
		 // pass as wheat
	 }
	 if (optionArray[i][0] == 1)
	 {
		 //drinks
	 }
	 if (optionArray[i][0] == 1)
	 {
		 //dairy
	 }
	 if (optionArray[i][0] == 1)
	 {
		 //meat
	 }
}
// for each item in the array, create a checkbox element, each containing information such as:
// <input type="checkbox" name="product" value="Bread">
// <label for="Bread">Bread/label><br>

for (i = 0; i < optionArray.length; i++) {

	var productName = optionArray[i].name;

	// create the checkbox and add in HTML DOM
	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.name = "product";
	checkbox.value = productName;
	checkbox.addEventListener("click", selectItems);
	productEntry.appendChild(checkbox);

	// create a label for the checkbox, and also add in HTML DOM
	var label = document.createElement('label')
	label.htmlFor = productName;
	label.appendChild(document.createTextNode(productName));
			productEntry.appendChild(label);

			productEntry.appendChild(document.createElement("br"));
			productEntry.appendChild(document.createElement("br"));

			// add image
			var image = document.createElement("img");
			image.src = optionArray[i].image;
			image.className = "productImage"
			productEntry.appendChild(image);

			productDisplay.appendChild(productEntry);
}
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));

}
