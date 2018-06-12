import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Menu, Collapse, TreeSelect, Alert, Select } from 'antd';
const TreeNode = TreeSelect.TreeNode;
import classNames from 'classnames';
import styles from './index.less';
import { AutoComplete } from 'primereact/components/autocomplete/AutoComplete';
import { Dropdown } from 'primereact/components/dropdown/Dropdown'
import { MultiSelect } from 'primereact/components/multiselect/MultiSelect';

const Option = Select.Option;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

/**
 * Sample Filters configuration data will be like below:
 * 
 * {
	"global_search": {
		
		"result_label_mappings": {
			
			"field": [
				{
					"key": "zd_ids",
					"value": "All Zendesk Ids"
				},
				{
					"key": "opp_ids",
					"value": "Opportunity Ids"
				},
				{
					"key": "doc_ids",
					"value": "Document Ids"
				},
				{
					"key": "master_doc_id",
					"value": "Master Document Id"
				},
				{
					"key": "domains",
					"value": "All Email Domains"
				},
				{
					"key": "county_code",
					"value": "Country Code ISO2"
				},
				{
					"key": "original_names",
					"value": "All Names"
				},
				{
					"key": "primary_name",
					"value": "Primary Names"
				},
				{
					"key": "lead_ids",
					"value": "All Lead Ids"
				},
				{
					"key": "sfdc_res_ids",
					"value": "All SFDC Reseller Acct. Ids"
				},
				{
					"key": "class_id",
					"value": "Class Id"
				},
				{
					"key": "sfdc_eu_ids",
					"value": "All SFDC Enduser Acct. Ids"
				},
				{
					"key": "zd_org_ids",
					"value": "All Zendesk Org. Ids"
				},
				{
					"key": "datamarts",
					"value": "All Datamarts"
				},
				{
					"key": "ns_int_eu_ids",
					"value": "Netsuite Internal Enduser ID"
				},
				{
					"key": "ns_ext_eu_ids",
					"value": "Netsuite External Enduser ID"
				},
				{
					"key": "ns_int_res_ids",
					"value": "Netsuite Internal Reseller ID"
				},
				{
					"key": "ns_ext_res_ids",
					"value": "Netsuite External Reseller ID"
				}
			]
		},
		"datagap_notifications": {
			
			"criterion": [
				{
					"field": "__ns_eu_ids",
					"id": "1",
					"msg": "There are {__ns_eu_ids} Duplicate Enduser Records in NetSuite",
					"value": ">0"
				}
			]
		},
		"#comment": [
			{},
			{},
			{},
			{},
			{}
		],
		"filter_by_additional_info": {
			
			],
			"perspective": [
				{
					"id": "support",
					
					
					"field": [
						{
							"id": "exigency_flag",
							"label": "Flagged for Exigency?",
							"values": "true"
						},
						{
							"id": "transaction_record_mapped",
							"label": "Transaction Record Mapped?",
							"values": "false"
						}
					]
				},
				{
					"id": "reseller",
					"#text": [
						"\n\t\n\t",
						"\n\t\n\t"
					],
					"field": {
						"id": "reseller_type",
						"label": "Reseller Type",
						"values": "VAR,LAR,OEM,MSP"
					}
				},
				"\n\t\n\t",
				{
					"id": "lead",
					"#text": [
						"\n\t",
						"\n\t"
					],
					"field": {
						"id": "transaction_record_mapped",
						"label": "Transaction Record Mapped?",
						"values": "false"
					}
				}
			]
		},
		"insight_lookup_tagging": {
			
			"perspective": [
				{
					"id": "support",
					
					"field": [
						{
							"id": "exigency_flag",
							"image": "exigency",
							"tooltip": "This organization is flagged for exigency",
							"value": "true"
						},
						{
							"id": "transaction_record_mapped",
							"image": "transmapped",
							"tooltip": "This organization has transaction records that are not mapped",
							"value": "false"
						}
					]
				},
				{
					"id": "reseller",
					
					"field": [
						{
							"id": "var",
							"image": "var",
							"label": "VAR",
							"path": "reseller_type",
							"tooltip": "Value Added Reseller"
						},
						{
							"id": "lar",
							"image": "lar",
							"label": "LAR",
							"path": "reseller_type",
							"tooltip": "Large Account Reseller"
						},
						{
							"id": "oem",
							"image": "oem",
							"label": "OEM",
							"path": "reseller_type",
							"tooltip": "Original Equipment Manufacturer"
						},
						{
							"id": "msp",
							"image": "msp",
							"label": "MSP",
							"path": "reseller_type",
							"tooltip": "Managed Service Provider"
						},
						{
							"id": "associate",
							"image": "associate",
							"label": "Associate",
							"path": "reseller_level",
							"tooltip": "Partner at level “Associate” (Few Transactions Yearly)"
						},
						{
							"id": "silver",
							"image": "silver",
							"label": "Silver",
							"path": "reseller_level",
							"tooltip": "Partner at level “Silver” (100K+ yearly)"
						},
						{
							"id": "gold",
							"image": "gold",
							"label": "Gold",
							"path": "reseller_level",
							"tooltip": "Partner at level “Gold” ($250K+ yearly)"
						},
						{
							"id": "platinum",
							"image": "platinum",
							"label": "Platinum",
							"path": "reseller_level",
							"tooltip": "Partner at level “Platinum” ($500K+ yearly)"
						},
						{
							"id": "faststart",
							"image": "faststart",
							"label": "FastStart",
							"path": "reseller_level",
							"tooltip": "Partner at level “Fast-start” (got onboarded recently)"
						}
					]
				},
				"\n\t\n\t",
				{
					"id": "lead",
					"#text": [
						"\n\t",
						"\n\t"
					],
					"field": {
						"id": "transaction_record_mapped",
						"image": "transmapped",
						"tooltip": "This organization has transaction records that are not mapped",
						"value": "false"
					}
				}
			]
		},
		"prefix_search_config": {
			
			"prefix": [
				{
					"combination": "true",
					"default_perspectives": "enduser",
					"default_search_mode": "default,E,C,P,F",
					"heading": "Org Name -Search by Company Name",
					"id": "n",
					"label": "To search stakeholders by their organization name eg : wipro",
					"tooltip": "Search by Company Name"
				},
				{
					"default_perspectives": "enduser,reseller,support,lead",
					"default_search_mode": "default,E,C",
					"heading": "Org ID -Search by Country Unique ID or Company Group ID",
					"id": "id",
					"label": "To search based on unique ID assigned for stakeholders eg : o.119097-392.92863.15",
					"tooltip": "Search by Country Unique ID or Company Group ID"
				},
				{
					"default_perspectives": "enduser,reseller,support,lead",
					"default_search_mode": "default,E,C",
					"heading": "Email/Url -Search by email or primary URL",
					"id": "e",
					"label": "To search based on stakeholder's Email domain eg : hendrikclaassen@gmail.com",
					"tooltip": "Search by email or primary URL"
				},
				{
					"default_perspectives": "enduser,reseller,support,lead",
					"default_search_mode": "default,E",
					"heading": "Zendesk ID -Zendesk Ticket ID",
					"id": "zdt",
					"label": "To search based on Ticket ID in Zendesk eg : 102418",
					"tooltip": "Zendesk Ticket ID"
				},
				{
					"default_perspectives": "enduser,reseller,support,lead",
					"default_search_mode": "default,E",
					"heading": "SFDC ID -SFDC Lead or Opportunity ID",
					"id": "sf",
					"label": "To search based on Lead or Opportunity ID from Salesforce eg : 00qo0000007ixqn",
					"tooltip": "SFDC Lead or Opportunity ID"
				},
				{
					"default_perspectives": "enduser,reseller,support,lead",
					"default_search_mode": "default,E",
					"heading": "Netsuite ID -Netsuite Internal and External ID",
					"id": "ns",
					"label": "To search based on Enduser ID from NetSuite eg : 1036156",
					"tooltip": "Netsuite Internal and External ID"
				}
			],
			"search_modes": {
				
				"mode": [
					{
						"id": "default",
						"label": "Default",
						"seq": "1"
					},
					{
						"id": "E",
						"label": "Exact",
						"seq": "2"
					},
					{
						"id": "C",
						"label": "Contains",
						"seq": "3"
					},
					{
						"id": "P",
						"label": "Phrase",
						"seq": "4"
					},
					{
						"id": "F",
						"label": "Fuzzy",
						"seq": "5"
					}
				]
			}
		},
		"countries": {
			
			"country": [
				{
					"code": "AF",
					"name": "Afghanistan"
				}
			]
		},
		"fields_required_for_ui": "\n\t"
	}
}
 * 
 * 
 * 
 * 
 */


export default class GlobalSrchFilters extends PureComponent {

	static defaultProps = {
		data: {},
		perspectives: [],
		field: "n",
		searchModes: [],
		country: "",
		mode: "",
		onFieldChanged: () => { },
		onPerspectiveChanged: () => { },
		onSearchModeChanged: () => { },
		onCountryAdded: () => { },
		onAdditionalInfoAdded: () => { },
		onTooltipChanged: () => { },

	};
	static propTypes = {
		field: PropTypes.string,
		mode: PropTypes.string,
		country: PropTypes.string,
		data: PropTypes.object,
		onFieldChanged: PropTypes.func,
		onAdditionalInfoAdded: PropTypes.func,
		onTooltipChanged: PropTypes.func,
		onPerspectiveChanged: PropTypes.func,
		onSearchModeChanged: PropTypes.func,
		onCountryAdded: PropTypes.func,
		perspectives: PropTypes.array,
		searchModes: PropTypes.array,
	};

	constructor() {
		super();
		this.state = {
			searchByVal: {}, datamarts: [], modes: [], countrySelected: {}, countryVisible: true, countrySuggestions: [],
			showPrimaryAdditionalInfo: true, showSecondaryAdditionalInfo: true, primaryAdditionalInfo: [], secondaryAdditionalInfo: [],
			selectedPrimaryAdditionalInfo: {}, selectedSecondaryAdditionalInfo: {},
			sourceDatamarts: [{ "id": "enduser", "label": "Endusers" },
			{ "id": "support", "label": "Ticket Orgs" }, { "id": "reseller", "label": "Resellers" },
			{ "id": "lead", "label": "Leads/Opportunities" }]
		};
		this.handleSrchByChange = this.handleSrchByChange.bind(this);
		this.handleSrchModesChange = this.handleSrchModesChange.bind(this);
		this.handlePerspChange = this.handlePerspChange.bind(this);
		this.handleCountryChange = this.handleCountryChange.bind(this);
		this.handlePrimAdditionalInfoChange = this.handlePrimAdditionalInfoChange.bind(this);
		this.handleSecondAdditionalInfoChange = this.handleSecondAdditionalInfoChange.bind(this);
	}

	componentWillUnmount() {
		clearTimeout(this.timeout);
	}

	
	//TODO:
	/**
	 * Below Dropdown elements taking only inline styles
	 * it is not taking the css styles if give className
	 * 
	 */
	//This is to show filter options to search by like orgname,email and etc
	showSearchbyOptions = (data) => {

		return (
			<Dropdown style={this.dropDownStyle}
				optionLabel="heading" value={this.state.searchByVal}
				options={data['global_search']['prefix_search_config']['prefix']}
				onChange={this.handleSrchByChange} filter={true} filterBy={"id,heading"}
				placeholder="Select Search by" />
		)
	}

	//Thsi is tol show filter options like serch types example: contains,fuzzy and phrase..
	showSearchModes = (data) => {
		const modes = data['global_search']['prefix_search_config']['search_modes']['mode'];
		return (
			<MultiSelect style={this.multiSelectStyle}
				optionLabel="label" value={this.state.modes}
				options={modes} onChange={this.handleSrchModesChange} />
		)
	}

	//This is to show Datamart options example: Enduser,Reseller,Lead and Support..
	showDataMarts = (data) => {
		const datamarts = this.state.sourceDatamarts;
		return (
			<MultiSelect style={this.multiSelectStyle}
				optionLabel="label" value={this.state.datamarts}
				options={datamarts} onChange={this.handlePerspChange} />
		)
	}



	//This is to show Countries options,,dynamically through global search config file
	showCountries = (data) => {
		const countries = data['global_search']['countries']['country'];
		return (
			// <AutoComplete value={this.state.countrySelected} onChange={this.handleCountryChange} optionLabel="name"
			//                   suggestions={this.state.countrySuggestions} completeMethod={this.suggestCountry.bind(this)} />

			<Dropdown style={this.dropDownStyle}
				value={this.state.countrySelected} options={countries}
				onChange={this.handleCountryChange} itemTemplate={this.countryTemplate}
				filter={true} filterPlaceholder="Select Country"
				filterBy="name" showClear={true} />



		)
	}



	//////Methods- when user changes any options/////////////////

	suggestCountry(event) {
		const countries = this.props.data['global_search']['countries']['country'];
		let results = countries.filter((countryObj) => {
			return countryObj['name'].toLowerCase().startsWith(event.query.toLowerCase());
		});
		this.setState({ countrySuggestions: results });
	}

	changeInputTooltip = (tooltip) => {

	}

	countryTemplate(option) {

		if (!option.code) {
			return option.name;
		}
		else {
			var logoPath = 'src/assets/countries/' + option['code'] + '.png';
			return (
				<div className="ui-helper-clearfix">
					<img alt={option.name} src={logoPath} style={{ display: 'inline-block', margin: '5px 0 0 5px' }} width="20" />
					<span >{option.name}</span>
				</div>
			);
		}
	}





	//from config get respective objects and withthem update the state
	getSearchModes = (lookupModes) => {
		const { data } = this.props;
		const allModes = data['global_search']['prefix_search_config']['search_modes']['mode'];
		var arr = [];
		lookupModes.forEach(lookupMode => {
			allModes.forEach(modeObj => {
				if (modeObj['id'] === lookupMode) {
					arr.push(modeObj);
				}
			});
		});
		return arr;
	}

	//from config get respective objects and withthem update the state
	getPerspectivess = (lookupPerspectives) => {
		const { data } = this.props;
		const datamarts = this.state.sourceDatamarts;
		var arr = [];
		lookupPerspectives.forEach(lookupPersp => {
			datamarts.forEach(datamartObj => {
				if (datamartObj['id'] === lookupPersp) {
					arr.push(datamartObj);
				}
			});
		});
		return arr;
	}



	//when user changes the search by option..
	handleSrchByChange(e) {
		this.applySearchByDependencies(e.value);
	}


	/**
	 * Here base don search by ie.. name,zendesk and etc, we have to dynamically
	 * update other filters like search modes and etc. including the tooltip on search box..
	 * 
	 */
	applySearchByDependencies = (data) => {
		this.setState({ searchByVal: data });
		console.log("Field value is:" + JSON.stringify(data));
		//NOw from state read what is selected here and accordingly bind the rest of the items
		//from this take the text input  tooltip
		var searchByValue = data['id']
		var defaultPerspective = data['default_perspectives'].split(",");
		var modes = data['default_search_mode'].split(",");
		this.setState({ datamarts: this.getPerspectivess(defaultPerspective) });
		this.setState({ modes: this.getSearchModes(modes) });
		//check and enable or disable country
		if (data.hasOwnProperty("combination")) {
			this.setState({ countryVisible: true });
		} else {
			this.setState({ countryVisible: false });
		}

		//Lets send this selected filters out to the parent...
		this.props.onFieldChanged(searchByValue);
		this.props.onSearchModeChanged(modes);
		this.props.onPerspectiveChanged(defaultPerspective);
		this.props.onTooltipChanged(data['label']);
		this.onAdditionaInfoSelected();

	}



	//when user changes the search by option..we fire callback to parent with the selected value
	handleSrchModesChange = (e) => {
		this.setState({ modes: e.value });
		var arr = [];
		e.value.forEach(obj => {
			arr.push(obj['id ']);
		});
		this.props.onSearchModeChanged(arr);
	}

	//when user selects country..we fire callback to parent with the selected value
	handleCountryChange = (e) => {
		//	const JSON = require('circular-json');
		//console.log("country value is:" + JSON.stringify(e) + e.code + e.name + e.label);
		this.setState({ countrySelected: e.name });
		this.props.onCountryAdded(e.value);
	}

	//when user changes the Perspective we fire callback to parent with the selected value
	handlePerspChange = (e) => {
		var value = e.value;
		console.log("perspective value is:" + JSON.stringify(value));
		//once state gets updated then callback to do some post processing
		// this.setState((prevState)=>{
		// 	return { datamarts: value };
		// });

		// this.perspectiveChanged();
		this.setState({ datamarts: value }, this.perspectiveChanged);
	}

	perspectiveChanged = () => {
		var arr = [];
		this.state.datamarts.forEach(obj => {
			arr.push(obj['id']);
		});
		//console.log("paretnt to go:" + JSON.stringify(this.state.datamarts));
		this.onAdditionaInfoSelected();
		//NOw we have to check the perspective selected items length,if it is one the need to check
		//in conifg any additional info define,if so needs to show respetcive comboboxes dynamically
		this.managePrimaryAdditionalInfo();
		//pass the selected perspetcive to parent..
		this.props.onPerspectiveChanged(arr);
	}

	//This function takes care of showing the additioanlinfo combo box based on selected perspectives length.
	managePrimaryAdditionalInfo = () => {
		const { data } = this.props;
		//step1: hide the earlier ones and check perspective length
		//based on length show the first additioanl info combobox
		//First clear the existing selctions and source of additoianl infos
		this.setState({
			showPrimaryAdditionalInfo: true, showSecondaryAdditionalInfo: true,
			selectedPrimaryAdditionalInfo: {}, selectedSecondaryAdditionalInfo: {},
			primaryAdditionalInfo: [],
			secondaryAdditionalInfo: []
		});
		//check the length and read config and show the primary additioanl info
		console.log("length" + this.state.datamarts.length);
		if (this.state.datamarts.length == 1) {
			//Form config get the perspective wise additional filters info
			//loop and check is any info exists for current perspetcive
			const additioanlinfoConifg = data['global_search']['filter_by_additional_info']['perspective'];
			var additionInfo = [];
			additioanlinfoConifg.forEach(configObject => {
				if (configObject.id == this.state.datamarts[0].id) {
					//Get the field define for the perspetive..
					//some times in xml to json conversion if single value is coming then it is like object,morethan one is array
					//so check and assignaccordingly
					additionInfo = configObject['field'];
					if (!Array.isArray(configObject['field'])) {
						additionInfo = [configObject['field']]
					}
					console.log("padditonal info" + JSON.stringify(additionInfo));
				}
			});
			//update the state
			//update state withvalues and now show the primary additional ifno combo
			this.setState({
				primaryAdditionalInfo: additionInfo,
				selectedPrimaryAdditionalInfo: {},
				showPrimaryAdditionalInfo: true
			});
		}
	}

	//when user changes the Primary additional innfo
	handlePrimAdditionalInfoChange = (e) => {

		this.setState({ selectedPrimaryAdditionalInfo: e.value, showSecondaryAdditionalInfo: true, secondaryAdditionalInfo: [], selectedSecondaryAdditionalInfo: {} });
		//clear the existing info if present and show the new secondary info from the currentavlue..
		var secondaryInfo = e.value.values.split(",");
		console.log("secondary additonal info is:" + JSON.stringify(secondaryInfo));
		if (!Array.isArray(secondaryInfo)) {
			secondaryInfo = [secondaryInfo];
		}
		//As this is just array of string..combobox is not supporting we need to convert to array of  objects
		var modifiedSecondaryInfo = [];
		secondaryInfo.forEach(element => {
			modifiedSecondaryInfo.push({ "label": element });
		});
		this.setState({ secondaryAdditionalInfo: modifiedSecondaryInfo, showSecondaryAdditionalInfo: true }, this.onAdditionaInfoSelected());

	}

	//when user changes the Secondary additioanl info
	handleSecondAdditionalInfoChange = (e) => {
		console.log("Secondary additonal info is:" + JSON.stringify(e.value));
		this.setState({ selectedSecondaryAdditionalInfo: e.value }, this.onAdditionaInfoSelected());
		//NOw we need to send this value along with primary value to parent toinclude in search request....

	}

	//This function passes the selcted primary and secondary additional info to the parent
	//thsi gets called whenever change in the state of  additional info  variables
	onAdditionaInfoSelected = () => {
		//read state and update to parent
		var key = this.state.selectedPrimaryAdditionalInfo.hasOwnProperty('id') ? this.state.selectedPrimaryAdditionalInfo['id'] : null;
		var value = this.state.selectedSecondaryAdditionalInfo.hasOwnProperty('label') ? this.state.selectedSecondaryAdditionalInfo['label'] : null;
		console.log("inside additional info selection" + JSON.stringify(this.state.selectedSecondaryAdditionalInfo));
		var info = {};
		info[key] = value;
		if (!!value) {
			this.props.onAdditionalInfoAdded(info);
		} else {
			this.props.onAdditionalInfoAdded({});
		}
	}

	/**
	 * Inline styles for drop down and multi select boxes
	 * Why we defining here,because,these components not taking css styles
	 * may be they depends on inline styles
	 */
	dropDownStyle = {
		width: '99%',
		fontSize: '10px',
		height: '25px'
	}


	multiSelectStyle = {
		...this.dropDownStyle,
		top: '5px'
	}


	render() {
		const {
			data, perspectives, field, searchModes, countries, onFieldChanged,
			onPerspectiveChanged,
			onSearchModeChanged,
			onCountryAdded, mode
		} = this.props;

		return (

			<Row type="flex" justify="start" align="middle">

				<Col span={6}>
					<Row>
						<small >Search By: </small>
					</Row>
					<Row>
						{this.showSearchbyOptions(data)}
					</Row>
				</Col>

				<Col span={4}>
					<Row>
						<small >Modes: </small>
					</Row>
					<Row>
						{this.showSearchModes(data)}
					</Row>
				</Col>


				<Col span={4}>
					<Row>
						<small >Country: </small>
					</Row>
					<Row>
						{this.showCountries(data)}
					</Row>
				</Col>




				<Col span={4}>
					<Row>
						<small >Datamarts: </small>
					</Row>
					<Row>
						{this.showDataMarts(data)}
					</Row>
				</Col>

				<Col span={3} style={{ display: this.state.showPrimaryAdditionalInfo ? 'visible' : 'none' }}>
					<Row>
						<small >Filter Type: </small>
					</Row>
					<Row>
						<Dropdown
							style={this.dropDownStyle}
							optionLabel="label" value={this.state.selectedPrimaryAdditionalInfo}
							options={this.state.primaryAdditionalInfo}
							onChange={this.handlePrimAdditionalInfoChange}
							placeholder="Select" />
					</Row>
				</Col>


				<Col span={3} style={{ display: this.state.showSecondaryAdditionalInfo ? 'visible' : 'none' }}>
					<Row>
						<small >Filter Value: </small>
					</Row>
					<Row>
						<Dropdown
							style={this.dropDownStyle}
							value={this.state.selectedSecondaryAdditionalInfo}
							options={this.state.secondaryAdditionalInfo}
							onChange={this.handleSecondAdditionalInfoChange}
							placeholder="Select" optionLabel="label" />
					</Row>
				</Col>






			</Row>

			// <div className={styles.horizontalContainer}>

			// 	<div className={styles.horizontalContainer}>
			// 		<span style={{ fontSize: '10px', fontWeight: 'bold' }}>Search By: </span>
			// 		{this.showSearchbyOptions(data)}
			// 	</div>


			// 	<div className={styles.horizontalContainer}>
			// 		<span style={{ fontWeight: 'bold', fontSize: '10px' }}>Modes: </span>
			// 		{this.showSearchModes(data)}
			// 	</div>

			// 	<div className={styles.horizontalContainer} style={{ display: this.state.countryVisible ? 'visible' : 'none' }}>
			// 		<span style={{ fontWeight: 'bold', fontSize: '10px' }}>Country: </span>
			// 		{this.showCountries(data)}
			// 	</div>

			// 	<div className={styles.horizontalContainer}>
			// 		<span style={{ fontWeight: 'bold', fontSize: '10px' }}>Datamarts: </span>
			// 		{this.showDataMarts(data)}
			// 	</div>

			// {/* Additoanl information primary*/}
			// <div className={styles.horizontalContainer}>
			// 	{this.state.showPrimaryAdditionalInfo}
			// 	<Dropdown
			// 		style={{ width: '16em', fontSize: '10px', display: this.state.showPrimaryAdditionalInfo ? 'visible' : 'none' }}
			// 		optionLabel="label" value={this.state.selectedPrimaryAdditionalInfo}
			// 		options={this.state.primaryAdditionalInfo}
			// 		onChange={this.handlePrimAdditionalInfoChange}
			// 		placeholder="Select" />

			// </div>

			// {/* Additoanl information secondary*/}
			// <div className={styles.horizontalContainer}>
			// 	<Dropdown
			// 		style={{ width: '16em', fontSize: '10px', display: this.state.showSecondaryAdditionalInfo ? 'visible' : 'none' }}
			// 		value={this.state.selectedSecondaryAdditionalInfo}
			// 		options={this.state.secondaryAdditionalInfo}
			// 		onChange={this.handleSecondAdditionalInfoChange}
			// 		placeholder="Select" optionLabel="label" />

			// </div>


			// </div>
		);
	}
}
