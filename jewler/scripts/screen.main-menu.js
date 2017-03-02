/* Here I have used "event delegation" instead of attaching event handlers to the elements on the screen. 
 * A single "click" event hanfler is added to the menu <ul> element
 * When the event fires, the handler function examines the target element and determines if the click event came from a button 
 *       element. If it did, the event handler switches the game to the correct screen using the name attributes on the button element
*/

jewel.screens["main-menu"] = (function(){
	var dom = jewel.dom,
	    game = jewel.game,
	    firstRun = true;

	function setup() {
		dom.bind("#main-menu ul.menu", "click", function(e) {
			if (e.target.nodeName.toLowerCase() === "button"){
				var action = e.target.getAttribute("name");
				game.showScreen(action);
			}
		});
	}

	function run() {
		if (firstRun) {
			setup();
			firstRun = false;
		}
	}

	return {
		run : run
	};
})();