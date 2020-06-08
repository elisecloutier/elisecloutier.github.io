
// It is adapted from https://www.w3schools.com/howto/howto_js_accordion.asp
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
	/* Toggle between adding and removing the "active" class,
	to highlight the button that controls the panel */
	this.classList.toggle("active");

	/* Toggle between hiding and showing the active panel */
	var panel = this.nextElementSibling;
	if (panel.style.display === "block") {
		panel.style.display = "none";
	} else {
		panel.style.display = "block";
	}
});
}


function populateListProductChoices() {


	console.log("test");

var checkboxes = diet.getElementsByTagName("input");
console.log(checkboxes);

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

var para = document.createElement("P");
para.innerHTML = "Here are the products we offer : ";
para.appendChild(document.createElement("br"));
para.appendChild(document.createElement("br"));

var pro = document.getElementById('displayProduct');
pro.innerHTML = "";

var radio = categories.getElementsByTagName("input");
console.log(radio);
var checked;
for (i=0; i<radio.length; i++) {
	if (categories.getElementsByTagName("input")[i].checked){
		checked = categories.getElementsByTagName("input")[i].value;
	}
}
console.log(checked);

//check which category has been chosen and display products based on selected cateogory
for (i=0; i<optionArray.length; i++) {
	if (optionArray[i].categorie == checked) {
		var image = document.createElement("img");
		image.src = optionArray[i].image;
		image.className = "productImage"
		para.appendChild(image);
		para.appendChild(document.createElement("br"));

		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		console.log(optionArray[i]);
		checkbox.value = optionArray[i].name;
		checkbox.price = optionArray[i].price;
		para.appendChild(checkbox);
		console.log(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = optionArray[i];
		label.appendChild(document.createTextNode(optionArray[i].name + " ($" + optionArray[i].price + ")"));
		para.appendChild(label);

		// create a breakline node and add in HTML DOM
		para.appendChild(document.createElement("br"));
		console.log(para);
		para.appendChild(document.createElement("br"));
		para.appendChild(document.createElement("br"));


	}
}
pro.appendChild(para);

}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.appendChild(img);
}



// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){

	var ele = document.getElementsByName("product");
	console.log(ele);
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
			console.log(ele[i].value);
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));

}
