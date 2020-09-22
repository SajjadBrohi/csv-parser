// Node modules used in the script
const fs = require('fs');
const papa = require('papaparse');
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

const file = fs.createReadStream('big.csv');

// Takes and reads user input
readline.question('Please enter the stock name: ', (name) => {
	// PapaParse module parses the local file
	papa.parse(file, {
		step: function (row) {
			// Finds and writes to console all the data in the CSV
			// that include the provided input in the stock name
			if (row.data[0].includes(name)) {
				console.log('Row:', row.data);
			}
		},
		complete: function () {
			// Prints once parsing is complete
			console.log('All done!');
		},
	});
	// Closes the data reading interface
	readline.close();
});
