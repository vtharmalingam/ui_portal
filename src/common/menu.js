import { isUrl } from '../utils/utils';
import enduser from '../assets/datamarts/e.png';
import reseller from '../assets/datamarts/r.png';
import lead from '../assets/datamarts/l.png';
import support from '../assets/datamarts/s.png';
import globalSrchIcon from '../assets/globalsearch/search1.png';

const menuData = [
  {
    name: 'dashboard',
    icon: 'dashboard1',
    path: 'dashboard',
    children: [{
      name: 'Analysis',
      path: 'analysis',
    }],
  },
  {
    name: 'GlobalSearch',
    path: 'globalsearch',
    icon: globalSrchIcon,
  },
  {
    name: 'Enuser Search',
    icon: enduser,
    path: 'endusersearch',
    children: [
    {
      name: 'Filter Search',
      path: 'filtersearch',
    },
    {
      name: 'Criteria Search',
      path: 'criteriasearch',
    },
    {
      name: 'Profile Search',
      path: 'profilesearch',
    }
  ],
  },
  {
    name: 'Reseller Search',
    icon: reseller,
    path: 'resellersearch',
    children: [
    {
      name: 'Filter Search',
      path: 'filtersearch',
    },
    {
      name: 'Criteria Search',
      path: 'criteriasearch',
    },
    {
      name: 'Profile Search',
      path: 'profilesearch',
    }
  ],
  },
  {
    name: 'Lead Search',
    icon: lead,
    path: 'leadsearch',
    children: [
    {
      name: 'Filter Search',
      path: 'filtersearch',
    },
    {
      name: 'Criteria Search',
      path: 'criteriasearch',
    },
    {
      name: 'Profile Search',
      path: 'profilesearch',
    }
  ],
  },
  {
    name: 'Support Search',
    icon: support,
    path: 'supportsearch',
    children: [
    {
      name: 'Filter Search',
      path: 'filtersearch',
    },
    {
      name: 'Criteria Search',
      path: 'criteriasearch',
    },
    {
      name: 'Profile Search',
      path: 'profilesearch',
    }
  ],
  },
  {
    name: 'visuals',
    icon: 'dashboard',
    path: 'visuals',
    children: [{
      name: 'Tabel',
      path: 'table',
    }, {
      name: 'Bar',
      path: 'bar',
    }, {
      name: 'Pie',
      path: 'pie',
    }, {
      name: 'Scatter',
      path: 'Scattered',
    }, {
      name: 'Area',
      path: 'area',
    }, {
      name: 'Compose',
      path: 'compse',
    },{
      name: 'PrimeReact',
      path: 'preact',
    },{
      name: 'DemoSample',
      path: 'demo',
    }
    ],
  }
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
