const EventEmitter = require("events");
const cutomEmitter = new EventEmitter();
cutomEmitter.on("response", (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`);
});
cutomEmitter.on("response", () => {
  console.log("some other logic here");
});
// cutomEmitter.emit("response");
cutomEmitter.emit("response", "john", 30);
