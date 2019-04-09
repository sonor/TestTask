var assert = require('chai').expect;
var res;
var value;


describe("Test that the Balance Field can set numbers", function() {
		

	it("Attempt to set numbers 1234567890", function() {
		
		browser.setViewportSize({
			width: 1200,
			height: 800
		})
		browser.url('');
		
		console.log('Attempt to set numbers 1234567890 in the field...')
		browser.setValue("#balance-value", "1234567890");
		 value = browser.getValue("#balance-value");
		 assert(value).to.equal('1234567890');
		 	
		 
		
		browser.pause(3000);
	
	});

	it("Attempt to set negative numbers -1234567890", function() {
		
		
		browser.url('');
		console.log('Attempt to set negative numbers -1234567890 in the field...')
		browser.setValue("#balance-value", "-1234567890");
		 value = browser.getValue("#balance-value");
		 assert(value).to.equal('-1234567890');
		 	
		 
		browser.pause(3000);
	

		});


	it("Attempt to set letters from A-Z", function() {
		

			browser.url('');
			console.log('Attempt to set letters from A-Z in the field...')
			this.timeout(60000);

			for(i=65; i<90; i++){
			res = String.fromCharCode(i);
			browser.setValue("#balance-value", res);
			value = browser.getValue("#balance-value");
		
			assert(value).to.equal('');
			}
			
		
		
		
	
	
	});




});
