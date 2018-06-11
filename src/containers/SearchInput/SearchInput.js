import { Icon, Button, Input, AutoComplete } from 'antd';
import { List, Avatar } from 'antd';
import * as actionTypes from '../../actions/actionTypes'
const Option = AutoComplete.Option;

// connect to be imported
import { connect } from 'dva';
 


function renderOption(item) {
  return (
    <Option key={item.primary_name}>
        {item.primary_name}
      <span className="global-search-item-count"> {item.primary_name}</span>
    </Option>


  );
}

// component gets wired to the model
// i.e., from 'search_org' namespace of model, import 'search_org'
@connect(({ search_org, loading }) => ({search_org}))


class SearchInput extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { textEntered: "" };//TODO:Can this be moved to model???
  }
  // handle the organization name suggestions
  handleSearchSuggest=(value) => {
    if(!!value){
     
     // console.log("Find Suggestion for this String: "+value);
      this.setState({textEntered : value});//TODO: Stupid way of doing..but need to keep moving...

      this.props.dispatch({
        type: actionTypes.FETCH_SEARCH_SUGGEST,
        payload: {"value": value}
      });
    }
  }
 
  onBtnClick =()=>{//TODO: Ideally we need to use refs to access text input and from that collect text entered
    const {
      onChange, onSelect,onSearch,onBtnClick
      } = this.props;
   onBtnClick(this.state.textEntered);
  }
 

  render() {
    
    const {
      onChange, onSelect,onSearch,onBtnClick,placeholderText
      } = this.props;

    
    const { search_org, loading } = this.props; //Making search_org model as property
    const { searchSuggestResults } = search_org;//we need only few props from state
 
    return (
      <div className="global-search-wrapper">
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: '100%' }}
          dataSource={searchSuggestResults.length > 0?searchSuggestResults.map(renderOption):[]}
          onChange={this.handleSearchSuggest}
          onSelect={onSelect}          
          onSearch={onSearch}          
          placeholder={placeholderText}
          optionLabelProp="text"
          
        >
       
          <Input
            suffix={(
              <Button className="search-btn" size="large" type="primary" onClick={this.onBtnClick}>
                <Icon type="search" />
              </Button>
            )}
          />
        </AutoComplete>
        
      </div>
    );
  }
}

export default SearchInput;