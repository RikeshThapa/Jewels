var jewel = {};

// wait until main document is loaded
window.addEventListener("load", function(){

	// start dynamic loading
	// Notice: yepnope has been deprecated, so Modernizr's Load function no longer workes like this code intended to
	/*
	Modernizr.load(
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

	var success = true;

	$.when(
		$.getScript("scripts/jquery-sizzle/src/sizzle.js"),
		$.getScript("scripts/dom.js"),
		$.getScript("scripts/game.js"),
		$.Deferred(function(deferred){
			$(deferred.resolve);
		})
	).done(function(){
		console.log("success!")
		jewel.game.showScreen("splash-screen");
	});
}, false); 


	/*if(true){
		jQuery.getScript("scripts/jquery-sizzle/src/sizzle.js")
		.done(function(){
			console.log('Script Loaded!');
		})
		.fail(function(){
			console.log('Scrip Did Not Load!');
			success = false;
		});

		jQuery.getScript("scripts/dom.js")
		.done(function(){
			console.log('Script Loaded!');
		})
		.fail(function(){
			console.log('Scrip Did Not Load!');
			success = false;
		});

		jQuery.getScript("scripts/game.js")
		.done(function(){
			console.log('Script Loaded!');
		})
		.fail(function(){
			console.log('Scrip Did Not Load!');
			success = false;
		});
		console.log("success!")
	}
	else {
		console.log('Something is wrong with your browser');
	}

	if (success == true){
		
	}*/
