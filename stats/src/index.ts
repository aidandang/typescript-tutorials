import { CsvFileRead } from './CsvFileReader';

const reader = new CsvFileRead('data/football.csv');

reader.read();

enum MatchResult {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D',
}

let manUnitedWinds = 0;

for (let match of reader.data) {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWinds++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWinds++;
	}
}

console.log(`Man United won: ${manUnitedWinds} games.`);
