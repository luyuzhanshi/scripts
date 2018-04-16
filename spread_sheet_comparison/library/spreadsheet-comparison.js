var generateOrderReport = function(spreadsheet, masterSpreadsheet){
	var output = []
	for (var i in masterSpreadsheet){
		var masterRow = masterSpreadsheet[i]
		var row = spreadsheet.find(doIdsMatch,masterRow) || {}
		masterRow[' Total SO Ext ELC '] = (row[' Total SO Ext ELC '] || 'N/A')
			.replace('$','').replace(/ /g,'').replace(/,/g,'')
		masterRow['Last Delivery Date'] = row['Last Delivery Date'] || 'N/A'
	    output.push(masterRow)
	}
	return output
}

var doIdsMatch = function(row){
	return this['Factory ID'] == row['Factory ID'] && this['Vendor ID'] == row['Vendor ID']
}

module.exports = generateOrderReport
