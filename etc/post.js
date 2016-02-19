document.addEventListener("DOMContentLoaded", function(){
	var content = document.getElementById("content");
	content.innerHTML = news[location.hash.substring(1,location.hash.length)];
});
