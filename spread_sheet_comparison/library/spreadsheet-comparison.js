var generateOrderReport = function(spreadsheet, masterSpreadsheet){
	var output = []
		for (var i in masterSpreadsheet){
					var masterRow = masterSpreadsheet[i]
					var row = spreadsheet.find(function(inputRow){
						var masterFactoryId = JSON.stringify(masterSpreadsheet[i]['Factory ID'])
						var masterVendorId = JSON.stringify(masterSpreadsheet[i]['Vendor ID'])
						var masterId = masterFactoryId + masterVendorId

						var inputFactoryId = JSON.stringify(inputRow['Factory ID'])
						var inputVendorId = JSON.stringify(inputRow['Vendor ID'])
						var inputId = inputFactoryId + inputVendorId

					return masterId == inputId
				})
        if(row){
					row[' Total SO Ext ELC '] = row[' Total SO Ext ELC '].replace('$','');
					row[' Total SO Ext ELC '] = row[' Total SO Ext ELC '].replace(/ /g,'')
					row[' Total SO Ext ELC '] = row[' Total SO Ext ELC '].replace(/,/g,'')
					console.log(row[' Total SO Ext ELC '])
  				masterRow[' Total SO Ext ELC '] = row[' Total SO Ext ELC ']
  				masterRow['Last Delivery Date'] = row['Last Delivery Date']
  				output.push(masterRow)
      	}
	      if(!row){
	        masterRow[' Total SO Ext ELC '] = 'N/A'
	        masterRow['Last Delivery Date'] = 'N/A'
	        output.push(masterRow)
	    	}
		}
		for(i=0;i<output.length;i++){
			console.log(output[i][' Total SO Ext ELC '])
		}
		return output
}

module.exports = generateOrderReport
