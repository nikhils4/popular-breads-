let products = [{
	name: "100g",
	price: 8,
	image: "resources/images/1.jpg"
},
{
	name: "125g sdw/ Milk",
	price: 10,
	image: "resources/images/2.jpg"
},
{
	name: "150g SDW",
	price: 10,
	image: "resources/images/3.jpg"
},
{
	name: "200g Silver coin",
	price: 15,
	image: "resources/images/4.jpg"
},
{
	name: "250g City special",
	price: 18,
	image: "resources/images/5.jpg"
},
{
	name: "300g City special",
	price: 0,
	image: "resources/images/6.jpg"
},
{
	name: "350g City special",
	price: 22,
	image: "resources/images/7.jpg"
},
{
	name: "400g Sweet soft",
	price: 28,
	image: "resources/images/8.jpg"
},
{
	name: "500g Maruti/ Rich tea",
	price: 33,
	image: "resources/images/1.jpg"
},
{
	name: "600g",
	price: 0,
	image: "resources/images/2.jpg"
},
{
	name: "700g",
	price: 43,
	image: "resources/images/3.jpg"
},
{
	name: "800g Special white",
	price: 47,
	image: "resources/images/4.jpg"
},
{
	name: "850g Bread king",
	price: 50,
	image: "resources/images/5.jpg"
},
{
	name: "400g Brown/ Atta",
	price: 30,
	image: "resources/images/6.jpg"
},
{
	name: "400g Multi grain",
	price: 35,
	image: "resources/images/7.jpg"
},
{
	name: "300g Gold coin",
	price: 28,
	image: "resources/images/8.jpg"
},
{
	name: "100g Fruty",
	price: 9,
	image: "resources/images/1.jpg"
},
{
	name: "150g Fruty",
	price: 15,
	image: "resources/images/2.jpg"
},
{
	name: "Pav 6 pcs",
	price: 17,
	image: "resources/images/3.jpg"
},
{
	name: "Pav 8 pcs",
	price: 20,
	image: "resources/images/5.jpg"
},
{
	name: "Pav 12 pcs",
	price: 28,
	image: "resources/images/6.jpg"
},
{
	name: "Bun 2 pcs",
	price: 5,
	image: "resources/images/7.jpg"
},
{
	name: "Pizza",
	price: 20,
	image: "resources/images/8.jpg"
}]




for (let i = 0; i < products.length; i++) {
	let div = document.createElement("div");
	div.setAttribute("class", "col-12 col-lg-4");
	div.setAttribute("style", "padding : 4vh 5vw");
	let card = document.createElement("div");
	card.setAttribute("class", "card");
	let img = document.createElement("img");
	img.setAttribute("class", "card-img-top");
	img.setAttribute("src", products[i].image);
	img.setAttribute("alt", "Card image cap");
	card.appendChild(img);
	let body = document.createElement("div");
	body.setAttribute("class", "card-body");
	let h5 = document.createElement("h5");
	h5.setAttribute("class", "card-title");
	let h5text = document.createTextNode(products[i].name);
	h5.appendChild(h5text);
	body.appendChild(h5);
	let p = document.createElement("p");
	p.setAttribute("class", "card-text");
	let ptext = document.createTextNode(products[i].price);
	let span = document.createElement("span");
	span.innerHTML = "&#8377";
	p.appendChild(span);
	p.appendChild(ptext);
	body.appendChild(p);
	card.appendChild(body);
	div.appendChild(card);
	document.getElementById("products-list").appendChild(div);
}