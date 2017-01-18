self.addEventListener('message', function(e) {
  var d = e.data;
      self.postMessage("Training"+d);
      
}, false);