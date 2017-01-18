db = openDatabase("hr", "", "", 1); 
if (db) 
  postMessage(3); 
else 
  postMessage(4); 