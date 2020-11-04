class Goods2 extends Goods {
	constructor(name, amount, image, count,sale=false) {
		super(name, amount, image, count);
		this.sale = sale;
	}
	draw(out) {
		let saleOut = this.sale ? '<h4 class="sale">Sale !!!</h4>' : '';
		document.querySelector(out).innerHTML = `<div class="product">
													<img src="${this.image}" alt="">
												 	<h4>${this.name}</h4>
												 	${saleOut}
												 	<h5>${this.count} $</h5>
												 </div>`
	}

}