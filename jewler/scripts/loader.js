var jewel = {
	//by adding another level to the namespace, we can keep the the screen modules together
	// instead of placing screen modules directly on the top-level jewel namespace
	screens : {}
};

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
		$.getScript("scripts/screen.splash.js"),
		$.getScript("scripts/screen.main-menu.js"),
		$.Deferred(function(deferred){
			$(deferred.resolve);
		})
	).done(function(){
		console.log("success!")
		jewel.game.showScreen("splash-screen");
	});
}, false); 
