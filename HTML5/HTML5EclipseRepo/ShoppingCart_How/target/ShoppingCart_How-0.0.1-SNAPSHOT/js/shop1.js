$(document).ready(function () {
	$(".pageLayout").submit(function (){
		//Fetch the user name
		console.log("In function");
		var uname = $("#username").val();
		sessionStorage.setItem("uname", uname);
		window.location.href = "mainPage.html";
		return false;
	});
});