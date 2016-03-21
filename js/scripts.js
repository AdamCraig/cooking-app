var liter = function(gall){
	return(gall * 3.7);
};

var getLiter = function(gall){
	var gall = parseInt(prompt("Enter amount in Gallons"));
 	return liter(gall);
};

alert(getLiter());
