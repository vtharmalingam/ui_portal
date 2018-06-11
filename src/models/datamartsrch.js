import { queryNotices } from '../services/api';
import { getInsightLookupShortcuts, getInslkupMetaData } from '../utils/InsLkpMngr';

import * as AggConst from '../Constants/AggConst'
// Import Proxy (Asynch) Methods
import { getDBReports,getStoredScenarioResults,getStoredScenario } from '../services/api';

export default {

  // Model Namespace
  namespace: 'datamartsrch',

  state: {
    perspective: 'enduser',
    criteriaSearchSrc: [],
    filterSrchSrc: [],
    datamartSrchResults:[]

  },


  effects: {

    //effect which brings DB reports from server
    *fetchDBReports({ payload }, { put, call }) {

      // console.log("In 'search_org' model: " + payload["value"])
      const data = yield call(getDBReports);
      yield put({
        type: 'GOT_DB_REPORTS',
        payload: data
      });

    },

    //holds organization name suggested
    *GET_REPORT_QUERY_BY_ID({ payload,perspective }, { put, call }) {//effect which brings live data from server
      const data = yield call(getStoredScenario, payload);
      //TODO:IMPORTANT:Once this result comes we have to show it in grid along with
      //Edit functionality to support editing of existing filters..
      //..BUT For now we are directly getting reuslt with this response to show the middle grid results(insight results)
      if(data){
        const reportData = yield call(getStoredScenarioResults, data,perspective);
      yield put({
        type: 'SHOW_REPORT_RESULTS',
        payload: reportData
      });
      }
    },
    ////TODO: USe this once we support Edit functionality
    *GET_REPORT_RESULTS( payload, { put, call }) {//effect which brings live data from server

      const data = yield call(getStoredScenarioResults, payload,perspective);
      //TODO:IMPORTANT:Once this result comes we have to show it in grid along with
      //Edit functionality to support editing of existing filters..
      //..BUT For now we are directly getting reuslt with this response to show the middle grid results(insight results)
      yield put({
        type: 'SHOW_REPORT_RESULTS',
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

    *fetchInsightLookup({ payload }, { put, call }) {//effect which brings live data from server

      console.log("Payload:" + JSON.stringify(payload))
      //we have to update tree with recent selection that he clicked on 
      //Also if he clicks on short cut we have to update respective selection to the tree comp
      yield put({
        type: 'updateTresSelection',
        payload: payload
      });

      //Onc euser cliks on short cute we need to update the respective perspective in inisghtlookupcomp
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




  },

  reducers: {
    //Thsi function filters the segmentation reports by perspective and assign them to Grid
    //IMportant..
    //Step1:HEre we have to filter by user_id..if it is report_developer then it goes to criteria search,
    //else filters search(same user name is user_id)
    //
    GOT_DB_REPORTS(state, { payload }) {//Updates the state..
      console.log("In GOT_DB_REPORTS --------++++++-----"+JSON.stringify(payload));
      var criteriaRpts = [];
      var filterSrchRpts = [];
        payload.forEach(dashBrd => {
          //filter on the segmentation and perspective selected
          if (dashBrd['report_type'] && dashBrd['report_type'].toString().toLowerCase() == "segmentation") {
            //NOw collect only the perspectives
            if (dashBrd['perspective'] == state.perspective) {
              //if user_id is report_developer then it is criteria search
              //else filter search 
              if (dashBrd['dashboard_name'] == AggConst.CRITERIA_SEARCH) {
                criteriaRpts.push(dashBrd);
              }
              else if (dashBrd['dashboard_name'] == AggConst.FILTER_SEARCH) {
                filterSrchRpts.push(dashBrd);
              }
            }
          }
        });

      return {
        ...state,
        criteriaSearchSrc: criteriaRpts,
        filterSrchSrc: filterSrchRpts,
        datamartSrchResults:[],
      };
    },
    UPDATE_PERSPECTIVE(state, { payload }) {//Updates the state..
       console.log("in UPDATE_PERSPECTIVE -------------"+payload);
      return {
        ...state,
        perspective: payload
      };
    },
    SHOW_REPORT_RESULTS(state, { payload }) {//Updates the state..
      // console.log("in search suggest -------------"+payload);
      return {
        ...state,
        datamartSrchResults: payload ? payload : []
      };



      //  return {
      //     Object.assign({}, originalObject, { existingPropertyKey: newValue });
      // }

    },


    global_search(state, { payload }) {//Updates the state..
      // console.log("in search_org model (global search) -------------"+payload);
      return {
        ...state,
        insight_lookup_data: {
          ...state.insight_lookup_data
        },
        searchSuggestResults: [],
        globalSrchResults: payload ? payload : []
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
        //  globalSrchResults:[...state.globalSrchResults],
        //  insight_lookup_data: [...state.init_insight_lookup],
      };
    },
    find_insight_lookup(state, { payload }) {//Updates the state..
      // console.log("in search_org model (insight_lookup) -------------"+JSON.stringify(payload));
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
