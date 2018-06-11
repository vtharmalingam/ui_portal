import { Icon, Button, Input, AutoComplete } from 'antd';
import { List, Avatar } from 'antd';
import SortableTree from 'react-sortable-tree';
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


class SortableTreeCont extends React.Component {

 
  // handle the organization name suggestions
  handleTreeChange=(value) => {
   // if(!!value){
      console.log("changed data"+JSON.stringify(value));
      this.props.dispatch({
        type: 'search_org/treeChange',
        payload: {"value": value}
      });
   // }
  }
 

  render() {
    
    const {
      onChange, onSelect
      } = this.props;

    
    const { search_org, loading } = this.props; //Making search_org model as property
    const { tree_data } = search_org;//we need only few props from state
 
    return (

        <div style={{ height: 500 }}>
          <SortableTree
            treeData={tree_data}
            onChange={this.handleTreeChange}
          />
        </div>


     
    );
  }
}

export default SortableTreeCont;