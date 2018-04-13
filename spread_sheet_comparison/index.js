var fs = require('fs')
var csvjson = require('csvjson')
var _ = require('underscore')
var moment = require('moment')

var config = JSON.parse(fs.readFileSync('./config/config.json',{ encoding : 'utf8'}))
var generateOrderReport = require('./library/spreadsheet-comparison.js')
var inputData = csvjson.toObject(fs.readFileSync(config.input,{
	encoding: 'utf8'
}),{
	delimiter: '\t'
})
var masterData = csvjson.toObject(fs.readFileSync(config.master,{
	encoding: 'utf8'
}),{
	delimiter: '\t'
})
var output = generateOrderReport(inputData, masterData)
fs.writeFileSync(config.output,csvjson.toCSV(JSON.stringify(output),{
	headers: 'relative',
	delimiter: ','
}))
