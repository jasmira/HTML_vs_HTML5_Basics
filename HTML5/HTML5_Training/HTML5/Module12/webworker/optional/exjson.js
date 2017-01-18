self.addEventListener('message', function(e) {
  var d = e.data;
      self.postMessage(d);
      
}, false);