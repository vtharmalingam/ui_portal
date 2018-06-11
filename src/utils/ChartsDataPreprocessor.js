import * as AggConst from '../Constants/AggConst';
import * as utils from '../utils/utils';
import * as InsLookupConst from '../Constants/InsightLookupConst';



/**
 * 
 * 
 * This is a wrapper function which return defaultinformation
 * that suites for most of the charts.
 * 
 * This return-dimensions[],measures[],measureFormats[],dataProvider[].
 * 
 * Based on the configuration present in the data,thsi function will check and returns the
 * required information.
 * 
 * Sample data:
 * 
 * {
	"query": {},
	"config": {},
	"_id": "order_history",
	"cache_metadata": {
		"cache_id": null,
		"cache_context": null
	},
	"data": {
		"aggs_data": {
			"doc_count": 64,
			"#G#orders#order_fy": [
				{
					"key": 2008,
					"doc_count": 1,
					"#M#orders#bookings_usd": 575,
					"#M#orders#acv_usd": 0
				},
				{
					"key": 2009,
					"doc_count": 5,
					"#M#orders#bookings_usd": 10576.420043945312,
					"#M#orders#acv_usd": 0
				}
			]
		},
		"view": {
			"ui": "",
			"dimensions": [
				"#G#orders#order_fy"
			],
			"measures": [
				{
					"name": "#M#orders#acv_usd",
					"agg_type": "sum"
				},
				{
					"name": "#M#orders#bookings_usd",
					"agg_type": "sum"
				}
			],
			"measures_value_formats": {
				"acv_usd": {
					"value_format": {
						"symbol": "$",
						"symbol align": "left",
						"desc": "Total ACV",
						"thousands sep": "true",
						"short-num format": "true",
						"precision": 0
					}
				},
				"bookings_usd": {
					"value_format": {
						"symbol": "$",
						"symbol align": "left",
						"desc": "Bookings",
						"thousands sep": "true",
						"short-num format": "true",
						"precision": 0
					}
				}
			},
			"group_by": [
				{
					"field": "order_fy",
					"node_id": "order_fy",
					"agg_type": "terms",
					"ref_id": "1",
					"clause": "group_by",
					"section": "orders",
					"size": "10"
				}
			],
			"groupby_include": []
		}
	},
	"logger_trans_id": 0
    }
 * 
 * 
 * 
 * 
 * 
 */
export function getPreProcessData(compInfo) {

	// console.log("viewpart-----" + JSON.stringify(compInfo));
	var processedData = {};
	if (compInfo) {
		var compData = compInfo['data'];
		var viewPart = compData['view'];
		//Lets add only measure keys and full measure to the object...only measures keys will be helpful to define fileds in chart
		if (viewPart.hasOwnProperty(AggConst.MEASURES)) {
			processedData.measures = getMeasureKeys(viewPart[AggConst.MEASURES]);
			processedData.measuresInfo = viewPart[AggConst.MEASURES];
		}
		processedData.dimensions = viewPart.hasOwnProperty(AggConst.DIMENSIONS) ? viewPart[AggConst.DIMENSIONS] : [];
		processedData[AggConst.MSR_VAL_FORMATS] = viewPart.hasOwnProperty(AggConst.MSR_VAL_FORMATS) ? viewPart[AggConst.MSR_VAL_FORMATS] : {};
		// processedData.title = getTitle(compInfo[AggConst.DIMENSIONS], compInfo[AggConst.MEASURES]);
		// processedData.field = processedData.measures[0].id;
		processedData.labelField = "key";
		processedData.chartData = compData[AggConst.AGGS_DATA][processedData.dimensions[0]];
	}
	console.log("preprocessed Data" + JSON.stringify(processedData.measures));
	return processedData;

}

/**
 * This function just takes each measure key and pushes to array then returns array
 * Normally array of measure contains object with name and agg_type.
 * This function just collects the name and return array of names..
 * 
 */
function getMeasureKeys(measures) {

	let measureKeys = [];
	measures.forEach(measure => {
		measureKeys.push(measure.name);
	});
	return measureKeys;
}


/**
 * 
 * This function return the measure value formt for given measure..
 * 
 */
export function getMeasureformats(msrFormatsData, selectedMsr) {

	for (var key in msrFormatsData) {

		if (selectedMsr.toLowerCase().indexOf(key.toLowerCase()) > -1) {

			return msrFormatsData[key]['value_format'];

		}
	}
}



/**
 * 
 * This function return the scale properties for the charts
 * 
 * This includes alias name...
 * Formattings and etc...
 * Going forward,this is the only function which returns the formats for charts
 * if any change we supposed to do it here only..
 * 
 */
export function getScaleProps(measures, dimensions, measureFormats) {
	var scale = {};
	//loop each measure and get respectcive measure formats object and from that collect description..
	measures.forEach(measure => {
		var formatsObj = getMeasureformats(measureFormats, measure);
		scale[measure] = {
			alias: formatsObj['desc'],
			formatter: val => {
				//date format....
				if (formatsObj['type'] == "date") {
					val = utils.convertStringToDate(val);
					return vale;
				}
				//Currency symbol..
				else if (formatsObj['symbol'].length > 0) {
					val = shortenLargeNumber(val);
					return formatsObj['symbol'] + val;

				}//normal number format..
				else {
					return shortenLargeNumber(val);
				}
			}
		}

	});
	return scale;
}


/**
 * This function prepares measure axis label,based on measures format data
 * 
 */

//This prepares AliasNames and formatting and etc...
export function getMsrFormatLable(text, measures, measureValFormats) {

	var formatsObj = getMeasureformats(measureValFormats, measures[0]);
	console.log("formatsObj" + JSON.stringify(formatsObj));
	//date format....
	if (formatsObj['type'] == "date") {
		text = utils.convertStringToDate(text);
		return text;
	}
	//Currency symbol..
	else if (formatsObj['symbol'].length > 0) {
		text = shortenLargeNumber(text);
		console.log("formatsObjPassed case:" + JSON.stringify(text));
		return formatsObj['symbol'] + text;
	}//normal number format..
	else {
		return shortenLargeNumber(text);
	}
	return text

}


/**
* This function prepares dimesnion axis label, removes the # and underscores
* 
*/
export function getDimFormatLable(dimText) {
	return utils.toTitleCase(dimText.split("#")[dimText.split("#").length - 1].replace("_", " "));

}

/**
 *Converts the given number to short number format.. 
 *
 */
export function shortenLargeNumber(num) {

	var units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
	var decimal;

	for (var i = units.length - 1; i >= 0; i--) {
		decimal = Math.pow(1000, i + 1);

		if (num <= -decimal || num >= decimal) {

			return (num / decimal).toFixed(2) + units[i];
		}
	}

	return Number(num).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}



