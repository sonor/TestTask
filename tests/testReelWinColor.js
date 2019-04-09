var assert = require('chai').expect;
var res;
var value = [];

describe("Test reel box Win color", function() {
		

	it("Attempt to set win combination 333 to the Test Data field. Reel box color numbers should be GREEN [ hex: '#008000' ]", function() {
		
		browser.setViewportSize({
			width: 1200,
			height: 800
		})
		browser.url('');
		
		console.log("Attempt to set numbers 333 in the Test Data field. Reel box color numbers should be GREEN [ hex: '#008000' ]");
		browser.setValue("#testdata", "333");
		browser.click("#spinButton");

		
		 value[0] = browser.getCssProperty("#slot .reel:nth-of-type(1) .notch2", 'color');
		 value[1] = browser.getCssProperty("#slot .reel:nth-of-type(2) .notch2", 'color');
		 value[2] = browser.getCssProperty("#slot .reel:nth-of-type(3) .notch2", 'color');
		 console.log(value);
		
 browser.pause(3000);

	
	});

	});