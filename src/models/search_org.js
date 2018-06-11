import { queryNotices } from '../services/api';
import { getInsightLookupShortcuts, getInslkupMetaData } from '../utils/InsLkpMngr';

// Import Proxy (Asynch) Methods
import {
  getGlobalSrchRes, getSuggestSearch, getInsightLookup,
  getGlobalSearchConfig, getInsightLookupMetaData, getPerspectiveConfig
} from '../services/api';
import * as utils from '../utils/utils';
import { forEach } from 'gl-matrix/src/gl-matrix/vec3';
export default {

  // Model Namespace
  namespace: 'search_org',

  state: {
    searchSuggestResults: [],  //holds organization name suggested
    globalSrchResults: [],     //holder for global search results in state
    dataMartShortcutsInfo: {},//Holder for datamartshortcuts and other required attributes
    // insight lookup parameters
    master_doc_id: "",
    class_id: "",
    perspective: "",
    request_scope: "",
    id: "",
    ww_scope: "",
    inslkpShortcuts: {},//holds specifically shortcuts for all the perspective
    inslkupMetadata: {},//holds different insightlookup options for all the perspectives
    insight_lookup_data: {},    //insight look up correspond to the selected master_doc_id
    tree_data: [],
    defaultSelectedKeys: [],//FOr inisght lookup tree component to give default selection
    defaultExpandAll: false,//For insightlookup options to expand or collapse..
    globalSrchFilter_field: "n",//Default filter is name..
    globalSrchFilter_perspectives: ["enduser"],//Default is enduser..283
    globalSrchFilter_searchModes: ["default"],//Default is Contains..
    globalSrchFilter_countries: ["any"],//Default is any
    globalSrchFilter_additional_filter: {},//additional filters..
    collapseFilters: true,
    collapseSrchResults: false,
    collapseInsLkups: true,
    insLkpvisualTitle: "",
    perspectiveConfigs: {},
    globalSearchConfig: {}
  },


  effects: {

    //effect which brings perspective config xml files
    *getPerspectiveConfigXML({ payload }, { put, call }) {

      // console.log("In 'search_org' model: " + payload["value"])

      const data = yield call(getPerspectiveConfig, payload);

      yield put({
        type: 'perspective_config',
        payload: data

      });


    },//* means generator-remebers its state of consecutive execution
    *geGlobalSearchConfig({ payload }, { put, call }) {

      const data = yield call(getGlobalSearchConfig);

      yield put({
        type: 'global_search_config',
        payload: data
      });
    },
    //effect which brings live data from server
    *fetchSearchSuggest({ payload }, { put, call }) {

      // console.log("In 'search_org' model: " + payload["value"])

      const data = yield call(getSuggestSearch, payload["value"]);

      yield put({
        type: 'search_suggest',
        payload: data
      });

    },

    *fetchGlobalSrch({ payload }, { put, call }) {//effect which brings live data from server

      const data = yield call(getGlobalSrchRes, payload);
      //console.log("results"+JSON.stringify(data));
      yield put({
        type: 'global_search',
        payload: data
      });
    },

    // This is to initiate the Datamrt shortcut menus tab
    *initDatamartShortcts({ payload }, { put }) {

      yield put({
        type: 'init_datamrt_shortcuts',
        payload: payload
      });

    },

    // This is to initiate the InitLookup component
    *initInsightLookup({ payload }, { put }) {

      yield put({
        type: 'init_insight_lookup',
        payload: payload
      });

    },

    *fetchInsightLookup({ payload }, { put, call }) {//effect which brings insight lookup data from server

      //console.log("Payload:" + JSON.stringify(payload))
      //we have to update tree with recent selection that he clicked on 
      //Also if he clicks on short cut we have to update respective selection to the tree comp
      yield put({
        type: 'updateTresSelection',
        payload: payload
      });

      //Onc euser cliks on shortcut we need to update the respective perspective in inisghtlookupcomp
      //Thsi helps us to pull respective insightlookup options to show in the middle section..
      const data = yield call(getInsightLookup, payload);
      yield put({
        type: 'find_insight_lookup',
        payload: data
      });
    },
    *treeChange({ payload }, { put }) {
      yield put({
        type: 'tree_node_changed',
        payload: payload
      });
    },

    *fetchInsLkpMetaData({ payload }, { put, call }) {//effect which brings insight lookups from live server
      const data = yield call(getInsightLookupMetaData, payload);
      yield put({
        type: 'inslkup_metadata',
        payload: data
      });
    },
    *expandAllLkupOptions({ payload }, { put }) {
      yield put({
        type: 'expand_lookup_options',
        payload: payload
      });
    },
    *updateGlobSrchFilters({ payload }, { put }) {
      yield put({
        type: 'update_global_search_filters',
        payload: payload
      });
    },




  },

  reducers: {

    inslkup_metadata(state, { payload }) {//Updates the state..

      var formattedShrtcuts = getInsightLookupShortcuts(payload);

      var formattedMetadata = getInslkupMetaData(payload);
      //console.log("In inslkup_metadata --------++++++-----"+JSON.stringify(formattedMetadata));
      return {
        ...state,
        inslkpShortcuts: formattedShrtcuts,
        inslkupMetadata: formattedMetadata
      };



      //  return {
      //     Object.assign({}, originalObject, { existingPropertyKey: newValue });
      // }

    },

    search_suggest(state, { payload }) {//Updates the state..
      // console.log("in search suggest -------------"+payload);

      return {
        ...state,
        globalSrchResults: [],  // remove the previous search result
        searchSuggestResults: payload ? payload : [],
        collapseInsLkups: true,
        collapseSrchResults: false,
        collapseFilters: true,
        insLkpvisualTitle: "",
        insight_lookup_data: {},
      };



      //  return {
      //     Object.assign({}, originalObject, { existingPropertyKey: newValue });
      // }

    },


    global_search(state, { payload }) {//Updates the state..
     // console.log("in search_org model (global search results) -------------"+JSON.stringify(payload));
      return {
        ...state,
        searchSuggestResults: [],
        collapseFilters: true,
        globalSrchResults: payload ? payload : [],
        collapseInsLkups: true,
        collapseSrchResults: false,
        insLkpvisualTitle: "",
        insight_lookup_data: {}
      };
    },

    //We just update the state based on what user has selected from global search results like perspectives
    init_datamrt_shortcuts(state, { payload }) {
      //console.log("in search_org model (init :: init_datamrts_shortcuts) -------------"+ JSON.stringify(payload));
      return {
        ...state,
        dataMartShortcutsInfo: payload ? payload : {},
        insight_lookup_data: {},
        defaultCheckedKeys: [],
        perspective: "",
        defaultExpandAll: false,
        collapseSrchResults: true,
        collapseFilters: true,
        collapseInsLkups: false
      };
    },

    //Updates state such that the "insight lookup" component is fully ready to serve a particular doc id 
    init_insight_lookup(state, { payload }) {
      console.log("in search_org model(init_insight_lookup)-------------" + JSON.stringify(payload));
      return {
        ...state,
        //  insight lookup
        master_doc_id: payload.master_doc_id,
        class_id: payload.class_id,
        perspective: payload.perspective,
        request_scope: payload.request_scope,
        searchSuggestResults: [],
        insight_lookup_data: {},
        defaultExpandAll: payload.defaultExpandAll,
        insLkpvisualTitle: "",
        id: payload.id,
        ww_scope: payload.ww_scope
        //  globalSrchResults:[...state.globalSrchResults],
        //  insight_lookup_data: [...state.init_insight_lookup],
      };
    },
    find_insight_lookup(state, { payload }) {//Updates the state..
      console.log("in search_org model (insight_lookup) -------------" + JSON.stringify(payload));
      return {
        ...state,
        insight_lookup_data: payload,
        // tree_data:[{ title: "Chicken1",children: [{ title: "Egg" }] }]
      };
    },
    updateTresSelection(state, { payload }) {//Updates the state..
      // console.log("in search_org model (updateTresSelection) -------------"+JSON.stringify(payload['defaultCheckedKeys']));
      return {
        ...state,
        defaultCheckedKeys: payload['defaultCheckedKeys'],
        // tree_data:[{ title: "Chicken1",children: [{ title: "Egg" }] }]
      };
    },
    updateSelectedLookupTitle(state, { payload }) {//Update selected lookup title for visual
      // console.log("in search_org model (updateTresSelection) -------------"+JSON.stringify(payload['defaultCheckedKeys']));
      return {
        ...state,
        insLkpvisualTitle: payload['visualTitle'],
        // tree_data:[{ title: "Chicken1",children: [{ title: "Egg" }] }]
      };
    },
    expand_lookup_options(state, { payload }) {//Updates the state..
      // console.log("in search_org model (updateTresSelection) -------------"+JSON.stringify(payload['defaultCheckedKeys']));
      return {
        ...state,
        defaultExpandAll: payload,
        // tree_data:[{ title: "Chicken1",children: [{ title: "Egg" }] }]
      };
    },

    //here we need to read each config and based on perspective defined inisde,store in local cache
    perspective_config(state, { payload }) {//Updates the state..

      var perspective =  payload['uilayout']['perspective'];
      //Now..get the state uilayout object and to it add the new item,like: perspective:json
      var conifgs = state.perspectiveConfigs;
      conifgs[perspective] = payload;
      return {
        ...state,
        perspectiveConfigs: conifgs,
        // tree_data:[{ title: "Chicken1",children: [{ title: "Egg" }] }]
      };
    },

    //here we need to read global search config xml and convert it to josn for better readability..
    global_search_config(state, { payload }) {//Updates the state..
      //console.log("xml converted is here"+ JSON.stringify(utils.xmlToJson(payload)));
      return {
        ...state,
        globalSearchConfig: payload
      };
    },



    update_global_search_filters(state, { payload }) {//Updates the state..
      // As the updated key and value comes here, we need to update state dynamically by key and value
      console.log("Filters changed:" + JSON.stringify(payload));
      var key = Object.keys(payload);
      var value = payload[key];
      if (key == "globalSrchFilter_field") {
        console.log("key:" + key + "-value:" + value);
        return {
          ...state,
          globalSrchFilter_field: value,
        }
      }
      else if (key == "globalSrchFilter_perspectives") {
        console.log("key:" + key + "-value:" + value);
        return {
          ...state,
          globalSrchFilter_perspectives: value,
        }

      } else if (key == "globalSrchFilter_searchModes") {
        console.log("key:" + key + "-value:" + value);
        return {
          ...state,
          globalSrchFilter_searchModes: value,
        }

      } else if (key == "globalSrchFilter_countries") {
        console.log("key:" + key + "-value:" + value);
        return {
          ...state,
          globalSrchFilter_countries: value,
        }
      }
      else if (key == "globalSrchFilter_additional_filter") {
        console.log("key:" + key + "-value:" + value);
        return {
          ...state,
          globalSrchFilter_additional_filter: value,
        }
      }
      return {
        ...state,
        key: value,
      };
    },//we use this for updating state for global search collapse flags
    update_global_search_collapse_flags(state, { payload }) {//Updates the state..
      // As the updated key and value comes here, we need to update state dynamically by key and value
      //  console.log("Full modela data:"+JSON.stringify(state));
      var key = Object.keys(payload);
      var value = payload[key];
      console.log("key:" + key + "-value:" + value);
      if (key == "collapseFilters") {
        console.log("key:" + key + "-value:" + value);
        return {
          ...state,
          collapseFilters: value,
        }
      }
      else if (key == "collapseSrchResults") {
        console.log("key:" + key + "-value:" + value);
        return {
          ...state,
          collapseSrchResults: value,
        }

      }
      return {
        ...state,
        key: value,
      };
    }
  },


  subscriptions: {
    setup({ history }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname, search }) => {
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};
