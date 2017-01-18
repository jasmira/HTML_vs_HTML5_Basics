$(document).ready(function() {
	var name = sessionStorage.getItem("uname");
	$("#uname").html(name);
	
	var cartObj = new Object();
	cartObj.items = [];
	
	$("#products button").click(function(){
		var id = $(this).parent().find("img").attr("id");
		//alert(id);
		var price = $(this).parent().find("span").text();
		//alert(price);
		var qty = $(this).parent().find("input[type='number']").val();
		//alert(qty);
		
		var item = new Object();
		item.id = id;
		item.price = price;
		item.quantity = qty;
		cartObj.items.push(item);
		
		var jsonStr = JSON.stringify(cartObj);
		console.log(jsonStr);
		
		var row = "<tr><td>" + id + "</td>";
		row += "<td>" + qty + "</td>";
		row += "<td>" + price + "</td></tr>";
		$(row).prependTo("#cart tbody");

	});
	
	$("#musicOff").click(function(){
		var audio1 = document.getElementById("audio1");
		audio1.pause();
		audio1.currentTime=0;
	});
	
	$("#viewCart").click(function(){
		$("table#cart").toggle();
	});
	
	$("#discountBtn").click(function(){
		var myWorker = new Worker("js/discountCalWorker.js");
		//Send the cart items to the worker
		myWorker.postMessage({'cartItems':cartObj.items});
	
		//Handle the response coming from worker
		myWorker.onmessage = function(event){
			var price = event.data;
			$("#finalPrice").text(price);
		};
	});
	
	$("#logout").click(function(){
		sessionStorage.clear();
		window.location.href = "index.html";
	});
});