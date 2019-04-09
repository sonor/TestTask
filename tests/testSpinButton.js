var assert = require('chai').expect;
var res;
var value;


describe("Test Spin button", function() {
		
	
	console.log('Attempt to click Spin button and spend 1 coin')
	it("Attempt to click Spin button and spend 1 coin", function() {
		
		browser.setViewportSize({
			width: 1200,
			height: 800
		})
		browser.url('');
		browser.click("#spinButton");
		value = browser.getValue("#balance-value");

		assert(value).to.equal('999');

	});

	

});
