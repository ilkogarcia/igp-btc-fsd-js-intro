// console.log alternatives you didn't know
const { log } = console;
log("hi");
log("testing");

// change the log function to any other name
const { log: myLog } = console;
myLog("hi");
myLog("testing");

// use console.group to group your logs
console.group("groupName");
console.log("hi");
console.log("testing");
console.groupEnd();

console.group("groupName2");
console.log("hi");
console.log("testing");
console.groupEnd();

// Use console.table for printing an array
const arr = [1, 2, 3, 4, 5];
console.table(arr);

// Use console.time to measure time. For example, checking how many seconds it went to complete the x task?
console.time("test");
setTimeout(() => {
    console.timeEnd("test");
}, 1000);

// Use console.assert to check if a condition is true. If it's not, it will throw an error.
console.assert(1 === 1, "1 is equal to 1");
console.assert(0 === [], "0 is equal to []");

// Use console.count to count the number of times a certain thing happens.
console.count("counter 1");
for (let i = 0; i < 10; i++) {
    i % 2 == 0 ? console.count("counter 1") : console.count("counter 2");
}

// Use debugger keyword  to stop the execution of the code.
const buggyCode = () => {
    debugger;
    console.log("hi");
};
// ...
buggyCode();
console.log("World");