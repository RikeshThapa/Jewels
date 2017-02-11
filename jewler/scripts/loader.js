var jewel = ();

// wait until main document is loaded
window.addEventLostener("load", function(){

	// start dynamic loading
	Modernizr.load([
		{
			// these files are always loaded
			load : [
			    "scripts/jquery-sizzle/src/sizzle.js",
			    "scripts/dom.js",
			    "scripts/gamw.js"
			],
			// called when all files have finished loading 
			// and executing
			complete : function() {
				console.log("All files loaded!");
			}
		}
	]);
}, false); 