var assert = require('chai').expect;
var res;
var value = [];
var match = false;
var isVisible;
var i;
describe("Test reel Win combinations", function() {
		

	it("Attempt to set combinations 333 to the Test Data field and check reels", function() {
		
		browser.setViewportSize({
			width: 1200,
			height: 800
		})
		browser.url('');
		
		console.log('Attempt to set numbers 333 in the Test Data field...');
		browser.setValue("#testdata", "333");
		browser.click("#spinButton");

		
		 value[0] = browser.getText("#slot .reel:nth-of-type(1) .notch2");
		 value[1] = browser.getText("#slot .reel:nth-of-type(2) .notch2");
		 value[2] = browser.getText("#slot .reel:nth-of-type(3) .notch2");
		 value[3] = browser.getText("#slot .reel:nth-of-type(4) .notch2");
		 value[4] = browser.getText("#slot .reel:nth-of-type(5) .notch2");
		
 		while (match == false){
 			if(value[0] == value[1] && value[1] == value[2]  ){

 				match = true;
 			}
 			else if(value[1] == value[2] && value[2] == value[3]){

 				match = true;
 			}
 			else if(value[2] == value[3] && value[3] == value[4]){

 				match = true;
 			}


 		}
		browser.pause(3000);

	
	});


	it("Attempt to set combinations 5555 to the Test Data field and check reels", function() {
		
		browser.url('');
		console.log('Attempt to set numbers 5555 in the Test Data field...');
		browser.setValue("#testdata", "5555");
		browser.click("#spinButton");

		
		 value[0] = browser.getText("#slot .reel:nth-of-type(1) .notch2");
		 value[1] = browser.getText("#slot .reel:nth-of-type(2) .notch2");
		 value[2] = browser.getText("#slot .reel:nth-of-type(3) .notch2");
		 value[3] = browser.getText("#slot .reel:nth-of-type(4) .notch2");
		 value[4] = browser.getText("#slot .reel:nth-of-type(5) .notch2");
		
 		while (match == false){
 			if(value[0] == value[1] && value[1] == value[2] && value[2] == value[3] ){

 				match = true;
 			}
 			else if(value[1] == value[2] && value[2] == value[3] && value[3] == value[4]){

 				match = true;
 			}
 		

 		}


		browser.pause(3000);

	
	});

	it("Attempt to set combinations 22222 to the Test Data field and check reels", function() {
		
		browser.url('');
		console.log('Attempt to set numbers 22222 in the Test Data field...');
		browser.setValue("#testdata", "22222");
		browser.click("#spinButton");

		
		 value[0] = browser.getText("#slot .reel:nth-of-type(1) .notch2");
		 value[1] = browser.getText("#slot .reel:nth-of-type(2) .notch2");
		 value[2] = browser.getText("#slot .reel:nth-of-type(3) .notch2");
		 value[3] = browser.getText("#slot .reel:nth-of-type(4) .notch2");
		 value[4] = browser.getText("#slot .reel:nth-of-type(5) .notch2");
		
 		while (match == false){
 			if(value[0] == value[1] && value[1] == value[2] && value[2] == value[3] && value[3] == value[4] ){

 				match = true;
 			}
 			
 		}


		browser.pause(3000);

	
	});

	it("Attempt to check Win combinations", function() {
		
		browser.url('');
		this.timeout(60000);
		console.log('Attempt to set numbers win numbers in the Test Data field...');
		for(i = 111; i <= 555; i+=111){
		browser.setValue("#testdata", i);
		browser.click("#spinButton");
		isVisible = browser.isVisibleWithinViewport("#winbox");
		browser.pause(7000);
		assert(isVisible).to.equal(true)
		}
		
		


		browser.pause(3000);

	
	});

	it("Attempt to check Win combinations", function() {
		
		browser.url('');
		this.timeout(60000);
		console.log('Attempt to set numbers win numbers in the Test Data field...');
		for(i = 1111; i <= 5555; i+=1111){
		browser.setValue("#testdata", i);
		browser.click("#spinButton");
		isVisible = browser.isVisibleWithinViewport("#winbox");
		browser.pause(7000);
		assert(isVisible).to.equal(true)
		}
		
	

		browser.pause(3000);

	
	});
});
