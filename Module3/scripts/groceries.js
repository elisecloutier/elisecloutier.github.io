
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
		price: 1.99,
		image: "https://alexcuisine.com/content/uploads/2010/12/DSC_0017-830x1024.jpg",
		categorie: 1
	},
	{
		name: "Granola Bars",
		vegetarian: true,
		vegan: false,
		glutenFree: false,
		lactose: true,
		organic: true,
		price: 1.99,
		image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/3/25/2/FNM_050110-Trail-Mix-002_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371591268973.jpeg",
		categorie: 2
	},
	{
		name: "Olives",
		vegetarian: true,
		vegan: true,
		glutenFree: true,
		lactose: true,
		organic: false,
		price: 1.99,
		image: "https://www.moroccoworldnews.com/wp-content/uploads/2019/12/green-olives.png",
		categorie: 1
	},
	{
		name: "Bread",
		vegetarian: true,
		vegan: true,
		glutenFree: false,
		lactose: true,
		organic: false,
		price: 2.35,
		image: "https://www.kingarthurflour.com/sites/default/files/styles/featured_image/public/recipe_legacy/1496-3-large.jpg?itok=STBbaJp5",
		categorie: 2
	},
	{
		name: "Ginger Kombucha",
		vegetarian: true,
		vegan: true,
		glutenFree: true,
		lactose: true,
		organic: true,
		price: 5.00,
		image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190208-kombucha-horizontal-136-1550010329.jpg?resize=980:*",
		categorie: 3
	},
	{
		name: "Graham Crackers",
		vegetarian: true,
		vegan: false,
		glutenFree: false,
		lactose: true,
		organic: true,
		price: 6.33,
		image: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2019_df_retail_homemade-graham-crackers_20916_600x600.jpg?ext=.jpg",
		categorie: 2
	},
	{
		name: "Ice Cream",
		vegetarian: true,
		vegan: false,
		glutenFree: true,
		lactose: false,
		organic: true,
		price: 7.99,
		image: "https://www.sweetestmenu.com/wp-content/uploads/2019/07/rockyroad8a.jpg",
		categorie: 4
	},
	{
		name: "Salmon",
		vegetarian: false,
		vegan: false,
		glutenFree: true,
		lactose: true,
		organic: true,
		price: 10.00,
		image: "https://www.mayrand.ca/globalassets/mayrand/catalog-mayrand/poissonnerie/52947_filet-de-saumon-entier-500-g.jpg?w=380&h=380&mode=crop",
		categorie: 5
	},
	{
		name: "Frozen Lasagna",
		vegetarian: false,
		vegan: false,
		glutenFree: false,
		lactose: false,
		organic: false,
		price: 12.50,
		image: "https://donaskitchen.com/wp-content/uploads/2019/09/best-frozen-lasagna.jpg",
		categorie: 5
	},
	{
		name: "Moscato Wine",
		vegetarian: true,
		vegan: true,
		glutenFree: true,
		lactose: true,
		organic: false,
		price: 19.75,
		image: "https://cms.splendidtable.org/sites/default/files/styles/w2000/public/wine-glasses_andresr-iStock-GettyImagesPlus-468917818-LEDE.jpg?itok=atCY6SJT",
		categorie: 3
	}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction.includes("Vegetarian")) && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction.includes("Vegan")) && (prods[i].vegan == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction.includes("LactoseIntolerant")) && (prods[i].lactose == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction.includes("GlutenFree")) && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction.includes("Organic")) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i]);
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
