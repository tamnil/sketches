// testing generators behavior
//

function* secGenFun() {
    yield "inseide secGen fun";
}

function* myGenFun(arg) {
    console.log("in yield1", arg);
    let y1 = yield 1;
    console.log("in yeld2", arg, y1);
    let y2 = yield* [100, 3, 87, 62, 2];
    console.log("in yeld3", "yeld arguments", y2, y1);
    yield secGenFun();
    yield 3;
    yield 4;
    yield 5;
    yield 6;
}

let myGen = myGenFun("init arg");

console.log(myGen);
console.log(myGen.next("argData"));
console.log(myGen.next("argData2    "));
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.dir(myGen);
