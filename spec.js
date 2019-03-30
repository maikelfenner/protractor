describe('Protractor demo app', function() {
	var ec = protractor.ExpectedConditions;

	beforeEach(function() {
		browser.waitForAngularEnabled(false);
		browser.get('http://automationpractice.com');
	});

	it('Deve ampliar imagem ao clicar', function() {
		element.all(by.css('.product_img_link')).first().click();
		$('#bigpic').click();
		expect($('.fancybox-skin').isPresent());
	});

	it('Deve aumentar a quantidade de unidades selecionadas', function() {
		element.all(by.css('.product_img_link')).first().click();
		$('.product_quantity_up').click();
		expect($('#quantity_wanted').getAttribute('value')).toEqual('2');
	});

	it('Deve diminuir a quantidade de unidades selecionadas', function() {
		element.all(by.css('.product_img_link')).first().click();
		for(i = 1; i <= 5; i++) {
			$('.product_quantity_up').click();
		}
		$('.product_quantity_down').click();
		expect($('#quantity_wanted').getAttribute('value')).toEqual('5');
	});

	it('Deve exibir mensagem ao adicionar na lista de desejos sem estar logado', function() {
		element.all(by.css('.product_img_link')).first().click();
		$('#wishlist_button').click();
		
		browser.wait(ec.presenceOf($('.fancybox-error')), 3000, 'Elemento não apareceu');

		expect($('.fancybox-error').getText()).toEqual('You must be logged in to manage your wishlist.');
	});

	it('Deve exibir mensagem ao adicionar produto no carrinho', function() {
		element.all(by.css('.product_img_link')).first().click();
		$('button.exclusive').click();
		
		expect($('#layer_cart .layer_cart_product').isPresent());
	});

	it('Deve exibir outra imagem ao trocar a cor do produto', function() {
		element.all(by.css('.product_img_link')).first().click();
		$('#color_14').click();
		
		expect(!$('#thumbnail_1').isPresent());
		expect(!$('#thumbnail_2').isPresent());
		expect($('#thumbnail_3').isPresent());
		expect($('#thumbnail_4').isPresent());
	});

	it('Deve exibir quantidade ao adicionar produto no carrinho', function() {
		element.all(by.css('.product_img_link')).first().click();
		$('.product_quantity_up').click();

		$('#add_to_cart button').click();

		browser.wait(ec.visibilityOf($('#layer_cart_product_quantity')), 3000, 'Elemento não apareceu');

		expect($('#layer_cart_product_quantity').getText()).toEqual('3');
	});

	it('Não deve diminuir quantidade selecionada se igual a 1', function() {
		element.all(by.css('.product_img_link')).first().click();
		$('.product_quantity_up').click();

		for(i = 1; i <= 3; i++) {
			$('.product_quantity_down').click();
		}

		expect($('#quantity_wanted').getAttribute('value')).toEqual('1');
	});
});
