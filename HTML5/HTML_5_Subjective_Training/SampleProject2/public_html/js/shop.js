$(document).ready(function(){
	$("form").submit(function(){
		if (localStorage) {
			var name = document.getElementById('fname').value;
			localStorage.setItem('name',name);
		}
		alert(name);
	})
})

function welcome() {
	window.location.href('mainPage.html');
	var name = localStorage.getItem('name');
	if (name != "undefined" || name != "null") {
		document.getElementById('welcomeMessage').innerHTML = "Hello " + name + "!";
	} else
		document.getElementById('welcomeMessage').innerHTML = "Hello!";
	}	

}