var assert = require('chai').expect;
var res, value, isVisible, oldValue, integer, newValue;
var colors = require('colors');



describe("Check all Wins elements", function() {
		



	it("Attempt to click Spin button till Win box appear", function() {
			console.log('Attempt to Win and check that WinBox is appear...');
		browser.setViewportSize({
			width: 1200,
			height: 800
		})
		browser.url('');
		
		this.timeout(120000);

		while(isVisible != true ){
			isVisible = browser.isVisibleWithinViewport("#winbox");
			
		browser.click("#spinButton");
		
	
		
		browser.pause(500);
	}



		
	
		

	});

	it("Attempt to click Spin button till Win Score added to Balance", function() {
		console.log('Attempt to check that Win Score added to Balance correctly...');

		browser.url('');
		
		this.timeout(120000);
		isVisible = false;

		oldValue = browser.getValue("#balance-value");
		while(isVisible != true ){
			isVisible = browser.isVisibleWithinViewport("#winbox");

		

		
		
			
			browser.click("#spinButton");
			--oldValue;
			browser.pause(500);
	

	}


	if(isVisible == true){

		value = browser.getText("#winbox");
		var num = value.replace( /^\D+/g, '');
		integer = parseInt(num, 10);
		
		newValue = browser.getValue("#balance-value");
		
	}

	assert(integer).to.equal(newValue - oldValue - 1);

	
	});
	



});

