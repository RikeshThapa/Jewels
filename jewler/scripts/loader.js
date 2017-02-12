var jewel = {};

// wait until main document is loaded
window.addEventListener("load", function(){

	// start dynamic loading
	// Notice: yepnope has been deprecated, so Modernizr's Load function no longer workes like this code intended to
	/*
	yepnope(
		{
			// these files are always loaded
			load : [
			    "scripts/jquery-sizzle/src/sizzle.js",
			    "scripts/dom.js",
			    "scripts/game.js"
			],
			// called when all files have finished loading 
			// and executing
			complete : function() {
				console.log("All files loaded!");
			}
		}
	);*/

	if(true){
		jQuery.getScript("scripts/jquery-sizzle/src/sizzle.js")
		.done(function(){
			console.log('Script Loaded!');
		})
		.fail(function(){
			console.log('Scrip Did Not Load!');
		});

		jQuery.getScript("scripts/dom.js")
		.done(function(){
			console.log('Script Loaded!');
		})
		.fail(function(){
			console.log('Scrip Did Not Load!');
		});

		jQuery.getScript("scripts/game.js")
		.done(function(){
			console.log('Script Loaded!');
		})
		.fail(function(){
			console.log('Scrip Did Not Load!');
		});
	}
	else {
		console.log('Something is wrong with your browser');
	}
}, false); 