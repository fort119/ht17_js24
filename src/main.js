//first programm

function randomDelayPrint(message) {
  for (let i = 0; i < message.length; i++) {
    const delayTime = Math.random() * 1000;
    setTimeout(() => {
      console.log(message[i]);
    }, delayTime);
  }
}

randomDelayPrint("hello");

//second programm

function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, delay);
  };
}
function printMessage() {
  console.log('выполнение!');
}
const processChange = debounce(() => printMessage(), 5000);

// third programm

function intervalRace(arrOfFunctions, t) {
  let results = [];
  let indexOfFunc = 0;

  function executeNextFunction() {
    if (indexOfFunc < arrOfFunctions.length) {
      let result = arrOfFunctions[indexOfFunc]();
      results.push(result);
      indexOfFunc++;
      setTimeout(executeNextFunction, t);
    } else {
      console.log(results);
    }
  }

  executeNextFunction();
}

function func1() {
  return "res1"
}
function func2() {
  return "res1"
}
function func3() {
  return "res1"
}
const functions = [
  func1,
  func2,
  func3,
];

intervalRace(functions, 1000);