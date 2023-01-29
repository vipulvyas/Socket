let ws = new WebSocket("ws://localhost:8080");
ws.onmessage = message => console.log(`Received: ${message.data}`);
ws.send("Hello! I'm client")