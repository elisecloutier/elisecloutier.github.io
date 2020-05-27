
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		vegan: true,
		glutenFree: true,
		lactose: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Granola Bars",
		vegetarian: true,
		vegan: false,
		glutenFree: false,
		lactose: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Olives",
		vegetarian: true,
		vegan: true,
		glutenFree: true,
		lactose: true,
		organic: false,
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		vegan: true,
		glutenFree: false,
		lactose: true,
		organic: false,
		price: 2.35
	},
	{
		name: "Ginger Kombucha",
		vegetarian: true,
		vegan: true,
		glutenFree: true,
		lactose: true,
		organic: true,
		price: 5.00
	},
	{
		name: "Graham Crackers",
		vegetarian: true,
		vegan: false,
		glutenFree: false,
		lactose: true,
		organic: true,
		price: 6.33
	},
	{
		name: "Ice Cream",
		vegetarian: true,
		vegan: false,
		glutenFree: true,
		lactose: false,
		organic: true,
		price: 7.99
	},
	{
		name: "Salmon",
		vegetarian: false,
		vegan: false,
		glutenFree: true,
		lactose: true,
		organic: true,
		price: 10.00
	},
	{
		name: "Frozen Lasagna",
		vegetarian: false,
		vegan: false,
		glutenFree: false,
		lactose: false,
		organic: false,
		price: 12.50
	},
	{
		name: "Moscato Wine",
		vegetarian: true,
		vegan: true,
		glutenFree: true,
		lactose: true,
		organic: false,
		price: 19.75
	}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Vegan") && (prods[i].vegan == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "LactoseIntolerant") && (prods[i].lactose == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
