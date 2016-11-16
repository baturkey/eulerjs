const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

function Problem() {
	this.id = '';
	this.correct = false;
	this.time = 0;
}

var problem;
var results = [];

rl.on('line', line => {
	if(line.indexOf("Problem") === 0) {
		problem = new Problem();
		problem.id = line.substr(8, 3);
	} else if((result = line.match(/is (\w+)/))) {
		problem.result = result[1] === 'correct';
	} else if((result = line.match(/(\d+)ms/))) {
		problem.time = parseInt(result[1]);
		results.push(problem);
	}
});

rl.on('close', () => {

	console.log("Incorrect:");
	results
		.filter(x => x.result == false)
		.map(x => console.log(x.id));

	console.log("Correct:");
	results
		.filter(x => x.result == true)
		.sort((a, b) => a.time > b.time ? 1 : (a.time < b.time ? -1 : 0))
		.map(x => console.log(x.id, x.time));
});
