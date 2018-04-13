var fs = require('fs')
var csvjson = require('csvjson')
var config = JSON.parse(fs.readFileSync('./config/config.json',{ encoding : 'utf8'}))
var generateOrderReport = require('./library/generate-order-report.js')
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
console.log(inputData)
console.log(masterData)
var output = generateOrderReport(inputData, masterData)
console.log(output)
fs.writeFileSync(config.output,csvjson.toCSV(JSON.stringify(output),{
	headers: 'relative',
	delimiter: ','
}))
