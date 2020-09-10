const Telegraf = require("telegraf");

const createNode = (token) => new Telegraf(token);

const botsList = (data) => data.map((x) => createBot(x[0], x[1]));

const createBot = (name, token) => ({
  name: name,
  token: token,
  telegram: createNode(token),
  myEcho: (msg) =>
    console.log(`echo from:${name} ; with token:${token} : ${msg}`),
});
// dummy data

dummyData = [
  ["n1", "t1"],
  ["n2", "t2"],
  ["n3", "t3"],
];

//start bots:

const myBots = botsList(dummyData);

// custom function
console.log('call function',myBots[1].myEcho("hello world"));

// use bot by name"

botN2 = myBots.find((x) =>  x.name == "n2" );

console.log('n2 bot obj',botN2)
//batch

// call the function for all bots

myBots.map (x => x.myEcho('hello ocean'))


//call telegram lib:

console.log(myBots[1].telegram.options)


//start polling
console.log(myBots[1].telegram.startPolling())



