function messageHandler(e) {
  postMessage("worker says: " + e.data + "  all");
}

addEventListener("message", messageHandler, true);
