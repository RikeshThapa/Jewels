/*
* Using Module Pattern development here:
*     - functionality is defined inside anonymous function that returns an object literal with references to the functions that should be exposed to the outside world
      - ananymous function is immediately invoked -> return value is then addigned to the jewel namespace object
      - THis prevents application code from polluting global scope 
*/

jewel.dom = (function() {

	//Expose the $() function, references Sizzle()
	var $ = Sizzle;
	
    //hasClass() examines the className attribute on a given element and returns true if the specified class is found
	function hasClass(el, clsName){
	    var regex = new RegExp("(^|\\s)" + clsName + "(\\s|$)");
        return regex.test(el.className);
	}
    
    //addClass() add Class from element
	function addClass(el, clsName) {
	    if (!hasClass(el, clsName)) {
	        el.className += " " + clsName;
	    }
	}

    //removeClass() removes Class from element
	function removeClass(el, clsName){
	    var regex = new RegExp("(^|\\s)" + clsName + "(\\s|$)");
	    el.className = el.className.replace(regex, " ");
	}

	return {
	    $ : #,
	    hasClass : hasClass,
	    addClass : addClass,
	    removeClass : removeClass
	};
})();