var assert = require('chai').expect;
var res;
var value;


describe("Test 'Test Data' field", function() {
		

	it("Attempt to set E.g numbers", function() {
		
		browser.setViewportSize({
			width: 1200,
			height: 800
		})
		browser.url('');
		
		console.log('Attempt to set numbers 111 and 4444 in the field...');
		browser.setValue("#testdata", "111");
		 value = browser.getValue("#testdata");
		assert(value).to.equal('111');
		 	
		 

		 browser.setValue("#testdata", "4444");
		  value = browser.getValue("#testdata");
		 assert(value).to.equal('4444');
		 	
		
		browser.pause(3000);
	
	});

	it("Attempt to set out of range numbers 00 and 555555", function() {
		
	
		browser.url('');
		
		console.log('Attempt to set numbers 00 and 5555 in the field...');
		browser.setValue("#testdata", "00");
		 value = browser.getValue("#testdata");
		 assert(value).to.equal('00');
		 	

		 browser.setValue("#testdata", "555555");
		  value = browser.getValue("#testdata");
		 assert(value).to.equal('555555');
		 	
		 
		
		browser.pause(3000);
	
	});

		it("Attempt to set letters and symbols in the field", function() {
		
	
		browser.url('');
		
		console.log('Attempt to set letters and symbols in the field...');
		this.timeout(60000);

			
			
		for(i=65; i<75; i++){
			res = String.fromCharCode(i);
			browser.setValue("#testdata", res);
			value = browser.getValue("#testdata");
			assert(value).to.equal(res);
			

		}
			browser.setValue("#testdata", '*/');
			value = browser.getValue("#testdata");
		assert(value).to.equal('*/');
			


});


});
