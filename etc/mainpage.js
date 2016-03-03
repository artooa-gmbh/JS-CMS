newsPerPage = 5;

document.addEventListener("DOMContentLoaded", function(){
	var content = [];
	var contentHTML = "";
	for(i = 1; i <= newsPerPage; i++) {
		content.push([news[news.length-i]]);
	}

	for(i = 0; i < newsPerPage; i++) {
		contentHTML += content[i]
	}

	document.getElementById("content").innerHTML = contentHTML;
});