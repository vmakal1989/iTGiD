class Goods {
	constructor(name, amount, image, count) {
		this.name = name;
		this.amount = amount;
		this.image = image;
		this.count = count;
	}

	draw(out) {
		document.querySelector(out).innerHTML = `<div class="product">
													<img src="${this.image}" alt="">
												 	<h4>${this.name}</h4>
												 	<h5>${this.count} $</h5>
												 </div>`
	}
}