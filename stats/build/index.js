"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CvsFileReader_1 = require("./CvsFileReader");
const MatchResult_1 = require("./MatchResult");
const csvFileReader = new CvsFileReader_1.CsvFileReader('data/football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manUnitedWinds = 0;
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWinds++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWinds++;
    }
}
console.log(`Man United won: ${manUnitedWinds} games.`);
