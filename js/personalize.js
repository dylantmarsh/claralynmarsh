function getQueryVariable (variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return decodeURI(pair[1]);
		}
	}

	return "";
}

function renderPersonalization () {
	var name = getQueryVariable("name");
	
	if(name.length > 0) {
		document.write("<h2>" + name + ", you are invited!</h2>");
	}
}