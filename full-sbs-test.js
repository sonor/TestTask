var assert = require('chai').expect;
var res, i;
var value, oldValue, integer, newValue, isVisible;
var colors = require('colors');
var match = false;
var valueArray = [];

describe("Full Step By Step Test", function() {
		
//BALANCE FIELD TEST
	it("Attempt to set numbers 1234567890", function() {
		
		browser.setViewportSize({
			width: 1200,
			height: 800
		})
		browser.url('');
		console.log('///////////////////////TESTING: BALANCE FIELD///////////////////////'.blue)
		console.log('Attempt to set numbers 1234567890 in the field...'.magenta)
		browser.setValue("#balance-value", "1234567890");
		 value = browser.getValue("#balance-value");
		 if (assert(value).to.equal('1234567890')){
		 	console.log('WARNING: Field values can be set by User, is that ok? Refer to requirement!'.yellow)
		 }
		
		browser.pause(3000);
	
	});

	it("Attempt to set negative numbers -1234567890", function() {
		
		
		browser.url('');
		console.log('Attempt to set negative numbers -1234567890 in the field...'.magenta)
		browser.setValue("#balance-value", "-1234567890");
		 value = browser.getValue("#balance-value");
		 if (assert(value).to.equal('-1234567890')){
		 	console.log('WARNING: Negative values can be set by User, is that ok? Refer to requirement!'.yellow)
		 }
		browser.pause(3000);
	

		});


	it("Attempt to set letters from A-Z", function() {
		

			browser.url('');
			console.log('Attempt to set letters from A-Z in the field...'.magenta)
			this.timeout(60000);

			for(i=65; i<90; i++){
			res = String.fromCharCode(i);
			browser.setValue("#balance-value", res);
			value = browser.getValue("#balance-value");
		
			assert(value).to.equal('');
			}
			console.log('TEST DONE: BALANCE FIELD'.green)
		
		
		
	
	
	});

//TEST DATA FIELD
	it("Attempt to set E.g numbers", function() {
		

		browser.url('');
		console.log('///////////////////////TESTING: TEST DATA FIELD///////////////////////'.blue);
		console.log('Attempt to set numbers 111 and 4444 in the field...'.magenta);
		browser.setValue("#testdata", "111");
		 value = browser.getValue("#testdata");
		 if (assert(value).to.equal('111')){
		 	console.log('111: PASSED'.green);
		 }

		 browser.setValue("#testdata", "4444");
		  value = browser.getValue("#testdata");
		 if (assert(value).to.equal('4444')){
		 	console.log('4444: PASSED'.green);
		 }
		
		browser.pause(3000);
	
	});

	it("Attempt to set out of range numbers 00 and 555555", function() {
		
	
		browser.url('');
		
		console.log('Attempt to set numbers 00 and 555555 in the field...'.magenta);
		browser.setValue("#testdata", "00");
		 value = browser.getValue("#testdata");
		 if (assert(value).to.equal('00')){
		 	console.log('00|WARNING: Out of range numbers can be set by User, is that ok?  Refer to requirement!'.yellow);
		 }

		 browser.setValue("#testdata", "555555");
		  value = browser.getValue("#testdata");
		 if (assert(value).to.equal('555555')){
		 	console.log('555555|WARNING: Out of range numbers can be set by User, is that ok?  Refer to requirement!'.yellow);
		 }
		
		browser.pause(3000);
	
	});

		it("Attempt to set letters and symbols in the field", function() {
		
	
		browser.url('');
		
		console.log('Attempt to set letters and symbols in the field...'.magenta);
		this.timeout(60000);

			
			
		for(i=65; i<75; i++){
			res = String.fromCharCode(i);
			browser.setValue("#testdata", res);
			value = browser.getValue("#testdata");
			

		}

		if(assert(value).to.equal(res)){
			console.log('WARNING: Letters can be set by User, is that ok? Refer to requirement!'.yellow);
			}


			browser.setValue("#testdata", '*/');
			value = browser.getValue("#testdata");
		if(assert(value).to.equal('*/')){
			console.log('WARNING: Symbols can be set by User, is that ok? Refer to requirement!'.yellow);
			}
	console.log('TEST DONE: TEST DATA FIELD'.green);

});


//TEST SPIN BUTTON
console.log('///////////////////////TESTING: SPIN BUTTON///////////////////////'.blue)
	console.log('Attempt to click Spin button and spend 1 coin'.magenta)
	it("Attempt to click Spin button and spend 1 coin", function() {
		
		
		browser.url('');
		browser.click("#spinButton");
		value = browser.getValue("#balance-value");

		assert(value).to.equal('999');

	});

	console.log('TEST DONE: SPIN BUTTON'.green)


//TEST WINS



	it("Attempt to click Spin button till Win box appear", function() {
		console.log('///////////////////////TESTING: WINS///////////////////////'.blue);
			console.log('Attempt to Win and check that WinBox is appear...'.magenta);

		browser.url('');
		
		this.timeout(120000);

		while(isVisible != true ){
			isVisible = browser.isVisibleWithinViewport("#winbox");
			
		browser.click("#spinButton");
		
	
		
		browser.pause(500);
	}


	console.log('WINBOX APPEAR: PASSED'.green);
		
	
		

	});

	it("Attempt to click Spin button till Win Score added to Balance", function() {
		console.log('Attempt to check that Win Score added to Balance correctly...'.magenta);

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

	assert(integer).to.equal(newValue - oldValue - 1)
	console.log('Correct WIN SCORE is '.green + integer );
	
	
		console.log('TEST DONE: WINS'.green);
	
	});

//TEST COMBINATIONS

it("Attempt to set combinations 333 to the Test Data field and check reels", function() {
		
	
		browser.url('');
		console.log('///////////////////////TESTING: TEST REEL COMBINATIONS///////////////////////'.blue);
		console.log('Attempt to set numbers 333 in the Test Data field...'.magenta);
		browser.setValue("#testdata", "333");
		browser.click("#spinButton");

		
		 valueArray[0] = browser.getText("#slot .reel:nth-of-type(1) .notch2");
		 valueArray[1] = browser.getText("#slot .reel:nth-of-type(2) .notch2");
		 valueArray[2] = browser.getText("#slot .reel:nth-of-type(3) .notch2");
		 valueArray[3] = browser.getText("#slot .reel:nth-of-type(4) .notch2");
		 valueArray[4] = browser.getText("#slot .reel:nth-of-type(5) .notch2");
		
 		while (match == false){
 			if(valueArray[0] == valueArray[1] && valueArray[1] == valueArray[2]  ){

 				match = true;
 					console.log('CORRECT COMBINATION'.green);
 			}
 			else if(valueArray[1] == valueArray[2] && valueArray[2] == valueArray[3]){

 				match = true;
 				console.log('CORRECT COMBINATION'.green);
 			}
 			else if(valueArray[2] == valueArray[3] && valueArray[3] == valueArray[4]){

 				match = true;
 				console.log('CORRECT COMBINATION'.green);
 			}


 		}
		browser.pause(3000);

		match = false;

	
	});


	it("Attempt to set combinations 5555 to the Test Data field and check reels", function() {
		
		browser.url('');
		console.log('Attempt to set numbers 5555 in the Test Data field...'.magenta);
		browser.setValue("#testdata", "5555");
		browser.click("#spinButton");

		
		 valueArray[0] = browser.getText("#slot .reel:nth-of-type(1) .notch2");
		 valueArray[1] = browser.getText("#slot .reel:nth-of-type(2) .notch2");
		 valueArray[2] = browser.getText("#slot .reel:nth-of-type(3) .notch2");
		 valueArray[3] = browser.getText("#slot .reel:nth-of-type(4) .notch2");
		 valueArray[4] = browser.getText("#slot .reel:nth-of-type(5) .notch2");
		
 		while (match == false){
 			if(valueArray[0] == valueArray[1] && valueArray[1] == valueArray[2] && valueArray[2] == valueArray[3] ){

 				match = true;
 				console.log('CORRECT COMBINATION'.green);
 			}
 			else if(valueArray[1] == valueArray[2] && valueArray[2] == valueArray[3] && valueArray[3] == valueArray[4]){

 				match = true;
 				console.log('CORRECT COMBINATION'.green);
 			}
 		

 		}


		browser.pause(3000);
		match = false;
	
	});

	it("Attempt to set combinations 22222 to the Test Data field and check reels", function() {
		
		browser.url('');
		console.log('Attempt to set numbers 22222 in the Test Data field...'.magenta);
		browser.setValue("#testdata", "22222");
		browser.click("#spinButton");

		
		 valueArray[0] = browser.getText("#slot .reel:nth-of-type(1) .notch2");
		 valueArray[1] = browser.getText("#slot .reel:nth-of-type(2) .notch2");
		 valueArray[2] = browser.getText("#slot .reel:nth-of-type(3) .notch2");
		 valueArray[3] = browser.getText("#slot .reel:nth-of-type(4) .notch2");
		 valueArray[4] = browser.getText("#slot .reel:nth-of-type(5) .notch2");
		
 		while (match == false){
 			if(valueArray[0] == valueArray[1] && valueArray[1] == valueArray[2] && valueArray[2] == valueArray[3] && valueArray[3] == valueArray[4] ){

 				match = true;
 				console.log('CORRECT COMBINATION'.green);
 			}
 			
 		}


		browser.pause(3000);

	
	});

	it("Attempt to check Win combinations", function() {
		
		browser.url('');
		this.timeout(60000);
		console.log('Attempt to set win numbers in the Test Data field...'.magenta);
		for(i = 111; i <= 555; i+=111){
		browser.setValue("#testdata", i);
		browser.click("#spinButton");
		isVisible = browser.isVisibleWithinViewport("#winbox");
		browser.pause(7000);
		if(assert(isVisible).to.equal(true)){
			console.log(i + ' CORRECT COMBINATION'.green);
		}
		else{
		console.log(i + ' INCORRECT COMBINATION'.red);

		}
		}
		
		


		browser.pause(3000);

	
	});

	it("Attempt to check Win combinations", function() {
		
		browser.url('');
		this.timeout(60000);
		console.log('Attempt to set win numbers in the Test Data field...'.magenta);
		for(i = 1111; i <= 5555; i+=1111){
		browser.setValue("#testdata", i);
		browser.click("#spinButton");
		isVisible = browser.isVisibleWithinViewport("#winbox");
		browser.pause(7000);
			if(assert(isVisible).to.equal(true)){
			console.log(i + ' CORRECT COMBINATION'.green);
		}
		else{
		console.log(i + ' INCORRECT COMBINATION'.red);

		}
		}
		
	

		browser.pause(3000);
		console.log('TEST DONE: COMBINATIONS'.green);
	
	});

	//TEST REEL WIN COLOR

	it("Attempt to set win combination 333 to the Test Data field. Reel box color numbers should be GREEN [ hex: '#008000' ]", function() {
		
	
		browser.url('');
		console.log('///////////////////////TESTING: TEST REEL BOX WIN COLOR///////////////////////'.blue);
		console.log('Attempt to set numbers 333 in the Test Data field, then win and Extract CSS color'.magenta);
		browser.setValue("#testdata", "333");
		browser.click("#spinButton");

		
		 valueArray[0] = browser.getCssProperty("#slot .reel:nth-of-type(1) .notch2", 'color');
		 valueArray[1] = browser.getCssProperty("#slot .reel:nth-of-type(2) .notch2", 'color');
		 valueArray[2] = browser.getCssProperty("#slot .reel:nth-of-type(3) .notch2", 'color');
		 console.log('RESULT:'.yellow);
		 console.log(valueArray);
		
 browser.pause(3000);
 console.log('TEST DONE: REEL WIN COLOR'.green);
	
	});
		
	
});
