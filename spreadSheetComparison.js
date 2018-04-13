var _ = require('underscore')
var moment = require('moment')

var generateOrderReport = function(spreadsheet, masterSpreadsheet){
	var output = []
	for (var i in spreadsheet){
		var row = spreadsheet[i]
		var masterRow = masterSpreadsheet.find(function(mr){
			return row.id == mr.id
		})
		row.newAttribute = masterRow.newAttribute
		output.push(row)
	}
}

module.exports = generateOrderReport
