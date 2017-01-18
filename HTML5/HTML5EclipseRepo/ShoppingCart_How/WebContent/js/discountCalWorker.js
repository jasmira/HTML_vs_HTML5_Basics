self.onmessage = function(event){
	var data = event.data;
	var len = data.cartItems.length;
	var finalPrice = 0;
	
	for(var i=0; i<len; i++){
		item = data.cartItems[i];
		price = (parseInt(item.price) * parseInt(item.quantity)) - 1000;
		finalPrice += price;
	}
	self.postMessage(finalPrice);
};