import { stringify } from 'qs';
import * as utils from '../utils/utils';

var URL = "http://10.55.12.73/insightdata/";
var BASE_URL = URL+"_360deg/";

//This function calls the REST to get global search results
//This is the call where we connect to server and brings the data
export async function getSuggestSearch(str) {
//TODO: Please Maintain one variable like we did in flex for Base URL addresss..
  return fetch(BASE_URL+'suggest_orgname/' + str,{
    method  : 'GET'
  }).then(statusHelper)
  .then(response => response.json())
  .catch(error => error)
  .then(data => {
       console.log("search suggestions:" +JSON.stringify(data));
       return data
   })
} 


//This function calls the REST to get perspective config xmls
export async function getPerspectiveConfig(str) {
    return fetch(URL+'uilayout/' + str,{
      method  : 'GET',
      headers : {
        'Accept': 'text/xml',
        'Content-Type'  : 'text/xml',
        'Access-Control-Allow-Origin' : 'true'
      },
    }).then(statusHelper)
    .then(response=>response.text())
    .catch(error => error)
    .then(data => {
      var xml = (new DOMParser()).parseFromString(data, "text/xml");
      //console.log("Perspective configs converted"+xml.toString());
      var convertedJson = utils.xmlToJson(xml);
     // console.log("Perspective configs converted"+JSON.stringify(convertedJson));
      return convertedJson;
     })
  }
  


//This function calls the REST to get globalsearch config xmls
export async function getGlobalSearchConfig() {
  return fetch(BASE_URL+'global_search_config',{
    method  : 'GET',
    headers : {
      'Accept'        : 'text/xml',
      'Content-Type'  : 'text/xml',
      'Access-Control-Allow-Origin' : 'true'
    },
  }).then(statusHelper)
  .then(response=>response.text())
  .catch(error => error)
  .then(data => {
    var xml = (new DOMParser()).parseFromString(data, "text/xml");
    return utils.xmlToJson(xml);
   })
}



//This function calls the REST to get global search results
//This is the call where we connect to server and brings the data
export async function getGlobalSrchRes(postData) {


  console.log(BASE_URL+'global_search')

  console.log(JSON.stringify(postData));
  return fetch(BASE_URL+'global_search',{
    method  : 'POST',
    headers : {
      'Accept'        : 'application/json',
      'Content-Type'  : 'application/json',
      'Access-Control-Allow-Origin' : 'true'
    },
    body: JSON.stringify(postData)
  }).then(statusHelper)
  .then(response => response.json())
  .catch(error => error)
  .then(data => {
     // console.log(JSON.stringify(data['data']['search_results'])) // Lets make key as x and doc_count as y
     // console.log("Here is formatted Resonse:"+JSON.stringify(data));
       return data['data']['search_results'];
   })
}



// Insight Lookup
// {"id":"entitlement_check","class_id":"o.181492-246.139625.1","master_doc_id":"o.181492-246.139625.1-fi","perspective":"enduser","request_scope":""}
export async function getInsightLookup(postData) {

  // console.log("In api:"  + JSON.stringify(postData))
  console.log("Payload:" + JSON.stringify(postData));
  console.log("URL:" + BASE_URL+'insight_lookup')

  return fetch(BASE_URL+'insight_lookup',{
    method  : 'POST',
    headers : {
      'Accept'        : 'application/json',
      'Content-Type'  : 'application/json',
      'Access-Control-Allow-Origin' : 'true'
    },
    body: JSON.stringify(postData)
  }).then(statusHelper)
  .then(response => response.json())
  .catch(error => error)
  .then(data => {
      // console.log(data) // Lets make key as x and doc_count as y
    // console.log("Here is getInsightLookup formatted Resonse:"+JSON.stringify(data));
       return data;
   })
}


// Insight Lookup
// {"id":"entitlement_check","class_id":"o.181492-246.139625.1","master_doc_id":"o.181492-246.139625.1-fi","perspective":"enduser","request_scope":""}
export async function getInsightLookupMetaData() {

  return fetch(BASE_URL+'insight_lookups/metadata',{
    method  : 'GET',
    headers : {
      'Accept'        : 'application/json',
      'Content-Type'  : 'application/json',
      'Access-Control-Allow-Origin' : 'true'
    }
  }).then(statusHelper)
  .then(response => response.json())
  .catch(error => error)
  .then(data => {
      // console.log(data) // Lets make key as x and doc_count as y
     // console.log("Here is formatted Resonse:"+JSON.stringify(data));
       return data;
   })
}
//This is the call where we connect to server and brings the data
export async function fakeChartData(postData) {

    return fetch(BASE_URL+'insight_lookup',{
      method  : 'POST',
      headers : {
        'Accept'        : 'application/json',
        'Content-Type'  : 'application/json',
        'Access-Control-Allow-Origin' : 'true'
      },
      body: JSON.stringify(postData)
    }).then(statusHelper)
    .then(response => response.json())
    .catch(error => error)
    .then(data => {
         console.log(data) // Lets make key as x and doc_count as y
         var data1 = data['data']['aggs_data']["#G#orders#order_fy"];
         var repl = data1.map(function(obj) {
          return {
              x: obj.key,
              y: obj.doc_count
          }
        })
        console.log("Here is formatted Resonse:"+JSON.stringify(repl));
         return repl;
     })
  }

///DatamrtSearch Calls///////////////////
var userName="report_developer"//TODO: this we have to get dynamically..
// Gets all the dashboard reports for the given user id
// 
export async function getDBReports() {

  return fetch(BASE_URL+'dashboards_summary/'+userName,{
    method  : 'GET',
    headers : {
      'Accept'        : 'application/json',
      'Content-Type'  : 'application/json',
      'Access-Control-Allow-Origin' : 'true'
    }
  }).then(statusHelper)
  .then(response => response.json())
  .catch(error => error)
  .then(data => {
       console.log(data) // Lets make key as x and doc_count as y
     // console.log("Here is formatted Resonse:"+JSON.stringify(data));
       return data['records'];
   })
}

//Gets the report query by the given ID
export async function getStoredScenario(reportId) {
    var postData = {_id:reportId}
    console.log(postData)
    return fetch(BASE_URL+'stored_scenario/get',{
      method  : 'POST',
      headers : {
        'Accept'        : 'application/json',
        'Content-Type'  : 'application/json',
        'Access-Control-Allow-Origin' : 'true'
      },
      body: JSON.stringify(postData)
    }).then(statusHelper)
    .then(response => response.json())
    .catch(error => error)
    .then(data => {
         console.log(data) // Lets make key as x and doc_count as y
         if(data.hasOwnProperty("records")){
           return data['records'][0];
         }
        return null;
     })
  }

//Gets the report query by the given ID
export async function getStoredScenarioResults(postData,perspective) {
  var perspective="enduser";
  console.log("IN API:"+JSON.stringify(postData)) // Lets make key as x and doc_count as y
  console.log("IN API URL:"+JSON.stringify(postData))
  return fetch(BASE_URL+'get_docs/'+perspective+'/'+userName,{
    method  : 'POST',
    headers : {
      'Accept'        : 'application/json',
      'Content-Type'  : 'application/json',
      'Access-Control-Allow-Origin' : 'true'
    },
    body: JSON.stringify(postData)
  }).then(statusHelper)
  .then(response => response.json())
  .catch(error => error)
  .then(data => {
       console.log(data) // Lets make key as x and doc_count as y
       if(data.hasOwnProperty("record")){
         return data['record'];
       }
      return null;
   })
}






//This checks the status code and accordingly return the promise resolve/promise reject
  function statusHelper (response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}
