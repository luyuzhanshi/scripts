var _ = require('underscore')
var moment = require('moment')
var generateOrderReport = function(inputSpreadsheet, masterSpreadsheet){
	var output = []
	this.makeNewSpreadsheet = function(){
		_.each(inputSpreadsheet, function(row){
			var vendorID = row['Vendor ID']
			var factoryID = row['Factory ID']
			var uniqueIdentifier = vendorID + factoryID
			var matched = this.checkForMatches(uniqueIdentifier)
			if(matched){

			}
		})
	}
	// var masterRelationships = _.groupBy(masterSpreadsheet,function(row){
	// 	debugger
	// 	var vendorID = row['Vendor ID']
	// 	var factoryID = row['Factory ID']
	// 	var joinString = vendorID + factoryID
	// 	return joinString.replace(/ /g,'')
	// })
	// var inputRelationships = _.groupBy(spreadsheet,function(row){
	// 	debugger
	// 	var vendorID = row['Vendor ID']
	// 	var factoryID = row['Factory ID']
	// 	var joinString = vendorID + factoryID
	// 	return joinString.replace(/ /g,'')
	// })
	// for (var key in relationships){
	// 	var row = {}
	// 	var orders = relationships[key]
	// 	var firstOrder = orders[0]
	// 	var firstDateString = firstOrder['DC Date']
	// 	var firstDate = moment(firstDateString,'MM/DD/YYYY').format()
	// 	var orderSummary = orders.reduce(function(sum,order){
	// 		var amountString = order['SO Ext ELC']
	// 		var parsedString = amountString.replace(/\$/g,'').replace(/,/g,'')
	// 		var amount = parseFloat(parsedString)
	// 		sum.total += amount
	// 		var dateString = order['DC Date']
	// 		var date = moment(dateString,'MM/DD/YYYY').format()
	// 		if (date > sum.lastDate){
	// 			sum.lastDate = date
	// 		}
	// 		return sum
	// 	},{
	// 		total: 0,
	// 		lastDate: firstDate
	// 	})
	// 	row['Vendor ID'] = firstOrder['Vendor ID']
	// 	row['Vendor'] = firstOrder['Vendor']
	// 	row['Factory ID'] = firstOrder['Factory ID']
	// 	row['Factory Name'] = firstOrder['Factory Name']
	// 	row['Total SO Ext ELC'] = orderSummary.total.toFixed(2)
	// 	row['Last Delivery Date'] = moment(orderSummary.lastDate).format('MM/DD/YYYY')
	// 	output.push(row)
	// }
	// return output
}
module.exports = generateOrderReport
