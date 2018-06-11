//Utilities which helps to orgnize insight lookups..

//This function will filter only the lookups having property called "ui_insight_shortcut"

export function getInsightLookupShortcuts(insightLkpMetaData) {
    var perspectives = Object.keys(insightLkpMetaData);
    console.log("per" + perspectives.array);
    var shortcuts = {};
    perspectives.forEach(element => {
        shortcuts[element] = getInsLookupShortcutsByPers(insightLkpMetaData, element);
    });
    // console.log("Generated shortcuts"+JSON.stringify(shortcuts));
    return shortcuts;
}

//Based on given perspective get the inisghtlookup shortcuts..
export function getInsLookupShortcutsByPers(insightLkpMetaData, perspective) {

    //Collect respective perspective data and filter by ui_insight_shortcut
    if (insightLkpMetaData && insightLkpMetaData.hasOwnProperty(perspective)) {
        var opLookups = [];
        var inslkups = insightLkpMetaData[perspective];
        inslkups.forEach(element => {
            if (element.hasOwnProperty('ui_insight_shortcut')) {
                opLookups.push(element);
            }
        });

        //To the shortcuts add the view All shortcuts
        var allInsightsObj = {"id":"all_insights","ui_shortcut_label":"View All Insights"};
        opLookups.unshift(allInsightsObj);
        return opLookups;
    }
}



//This function returns the distinct grpup names for given perspetcive
export function getDistinctISLKUPGrpNames(perspective, insightLkpMetaData) {
    //Collect respective perspective data 
    if (insightLkpMetaData && insightLkpMetaData.hasOwnProperty(perspective)) {
        var distinctLookups = [];
        var tempLookups = [];
        var inslkups = insightLkpMetaData[perspective];
        inslkups.forEach(element => {
            if (element.hasOwnProperty('ui_group_name')) {
                var grpName = element.ui_group_name;
                if (tempLookups.indexOf(grpName) == -1) {
                    tempLookups.push(grpName);
                    distinctLookups.push({ "label": grpName, order: element['ui_order'] });
                }
            }
        });
        JSON.stringify("Distinct grups----"+distinctLookups)
        return distinctLookups;
    }
}

//This function returns the distinct grpup nmaes for given perspetcive
export function getInslkupMetaData(insightLkpMetaData) {
    //Collect respective perspective data 
    var perspectives = ['enduser', 'reseller', 'lead', 'support'];
    var finalOp = Object.create(null);
    perspectives.forEach(persp => {
        var objByPers = Object.create(null);
        var grpNames = getDistinctISLKUPGrpNames(persp, insightLkpMetaData);
       
        var lookupsByPers = insightLkpMetaData[persp];
        grpNames.forEach(eachGrp => {
            var lkupsbyGrpName = getInsLkupsByGrpName(lookupsByPers, eachGrp['label']);
           // console.log("=================="+JSON.stringify(lkupsbyGrpName));
            //   eachEntry
            var grpName = eachGrp['label'];
            objByPers[grpName] = lkupsbyGrpName
        });
        finalOp[persp] = objByPers;
    });
    return finalOp;
}

//For the given groupname return the respective insightlookups falls under the group
export function getInsLkupsByGrpName(lookups, grpName) {
    var lookupsArray = [];
    lookups.forEach(lookup => {
        if (lookup.hasOwnProperty("ui_group_name")) {

            if (lookup.hasOwnProperty("ui_context") && (lookup.ui_context == "detailed_view" || lookup.ui_context == "datagaps")) {
                return;
            }
            if (lookup.ui_group_name == grpName) {
                var obj = {
                    "id": lookup['id'], "label": lookup.ui_perspective_srch_tooltip,
                    "toolTip": lookup.ui_label, "ww_scope": false, "editDim": lookup.hasOwnProperty('ui_edit_dims') ? true : false
                };
                //if lookup has property ui_ww_scope then add it,based on this we need to show country and global icons..
                if (lookup.hasOwnProperty("ui_ww_scope")) {
                    obj['ww_scope'] = true;
                }
                lookupsArray.push(obj);
            }
        }
    });
    return lookupsArray;
}