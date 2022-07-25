//Global->no window
//__dirname,__filename,require,module,process
console.log(__dirname);
console.log(__filename);
console.log(require, "+++++++++++");
console.log(module, "-----------");
console.log(process);
setInterval(() => {
  console.log("hello moni");
}, 1000);
setTimeout(() => {
  console.log("settimeout");
}, 1000); //only one time execute
