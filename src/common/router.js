import { createElement } from 'react';
import dynamic from 'dva/dynamic';
import pathToRegexp from 'path-to-regexp';
import { getMenuData } from './menu';

let routerDataCache;

const modelNotExisted = (app, model) => (
  // eslint-disable-next-line
  !app._models.some(({ namespace }) => {
    return namespace === model.substring(model.lastIndexOf('/') + 1);
  })
);

// wrapper of dynamic
const dynamicWrapper = (app, models, component,urlparams) => {
  // () => require('module')
  // transformed by babel-plugin-dynamic-import-node-sync
  if (component.toString().indexOf('.then(') < 0) {
    models.forEach((model) => {
      if (modelNotExisted(app, model)) {
        // eslint-disable-next-line
        app.model(require(`../models/${model}`).default);
      }
    });
    return (props) => {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return createElement(component().default, {
        ...props,
        routerData: routerDataCache,
        urlparams:urlparams,
      });
    };
  }
  // () => import('module')
  return dynamic({
    app,
    models: () => models.filter(
      model => modelNotExisted(app, model)).map(m => import(`../models/${m}.js`)
      ),
    // add routerData prop
    component: () => {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return component().then((raw) => {
        const Component = raw.default || raw;
        return props => createElement(Component, {
          ...props,
          routerData: routerDataCache,
        });
      });
    },
  });
};

function getFlatMenuData(menus) {
  let keys = {};
  menus.forEach((item) => {
    if (item.children) {
      keys[item.path] = { ...item };
      keys = { ...keys, ...getFlatMenuData(item.children) };
    } else {
      keys[item.path] = { ...item };
    }
  });
  return keys;
}

export const getRouterData = (app) => {

  const routerConfig = {
    '/': {
      component: dynamicWrapper(app, ['user', 'login'], () => import('../layouts/BasicLayout')),
    },
    '/dashboard/analysis': {
      component: dynamicWrapper(app, ['chart'], () => import('../containers/Dashboard/Analysis')),
    },
    '/globalsearch': {
      component: dynamicWrapper(app, [], () => import('../containers/GlobalSearch/GlobalSearchContainer')),
    },
    '/exception/403': {
      component: dynamicWrapper(app, [], () => import('../routes/Exception/403')),
    },
    '/exception/404': {
      component: dynamicWrapper(app, [], () => import('../routes/Exception/404')),
    },
    '/exception/500': {
      component: dynamicWrapper(app, [], () => import('../routes/Exception/500')),
    },
    '/exception/trigger': {
      component: dynamicWrapper(app, ['error'], () => import('../routes/Exception/triggerException')),
    },
    '/user': {
      component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
    },
    '/user/login': {
      component: dynamicWrapper(app, ['login'], () => import('../routes/User/Login')),
    },
    '/user/register': {
      component: dynamicWrapper(app, ['register'], () => import('../routes/User/Register')),
    },
    '/user/register-result': {
      component: dynamicWrapper(app, [], () => import('../routes/User/RegisterResult')),
    },
    '/visuals/table': {
      component: dynamicWrapper(app, [], () => import('../visualization/Table')),
    },
    '/visuals/pie': {
      component: dynamicWrapper(app, [], () => import('../visualization/Pie')),
    },
    '/visuals/bar': {
      component: dynamicWrapper(app, [], () => import('../visualization/Bar')),
    },
    '/visuals/compose': {
      component: dynamicWrapper(app, [], () => import('../visualization/Composed')),
    },
    '/visuals/scattered': {
      component: dynamicWrapper(app, [], () => import('../visualization/Scattered')),
    },
    '/visuals/area': {
      component: dynamicWrapper(app, [], () => import('../visualization/Area')),
    },
    '/visuals/preact': {
      component: dynamicWrapper(app, [], () => import('../visualization/PrimeReact')),
    },
    '/visuals/demo': {
      component: dynamicWrapper(app, [], () => import('../visualization/GlobalDemo')),
    },
    '/endusersearch/filtersearch': {
      component: dynamicWrapper(app, [], () => import('../containers/DatamartSearch/DatamartSearch'),
      {"datamart":"enduser","mode":"filter"}),
    },
    '/endusersearch/criteriasearch': {
      component: dynamicWrapper(app, [], () => import('../containers/DatamartSearch/DatamartSearch'),{"datamart":"enduser","mode":"criteria"}),
    },
    '/endusersearch/profilesearch': {
      component: dynamicWrapper(app, [], () => import('../containers/DatamartSearch/DatamartSearch'),{"datamart":"enduser","mode":"profile"}),
    },
    '/resellersearch/filtersearch': {
      component: dynamicWrapper(app, [], () => import('../containers/DatamartSearch/DatamartSearch'),{"datamart":"reseller","mode":"filter"}),
    }, '/resellersearch/criteriasearch': {
      component: dynamicWrapper(app, [], () => import('../containers/DatamartSearch/DatamartSearch'),{"datamart":"reseller","mode":"criteria"}),
    },
    '/resellersearch/profilesearch': {
      component: dynamicWrapper(app, [], () => import('../containers/DatamartSearch/DatamartSearch'),{"datamart":"reseller","mode":"profile"}),
    },
    '/leadsearch/filtersearch': {
      component: dynamicWrapper(app, [], () => import('../containers/DatamartSearch/DatamartSearch'),{"datamart":"lead","mode":"filter"}),
    }, '/leadsearch/criteriasearch': {
      component: dynamicWrapper(app, [], () => import('../containers/DatamartSearch/DatamartSearch'),{"datamart":"lead","mode":"criteria"}),
    },
    '/leadsearch/profilesearch': {
      component: dynamicWrapper(app, [], () => import('../containers/DatamartSearch/DatamartSearch'),{"datamart":"lead","mode":"profile"}),
    },
    '/supportsearch/filtersearch': {
      component: dynamicWrapper(app, [], () => import('../containers/DatamartSearch/DatamartSearch'),{"datamart":"support","mode":"filter"}),
    }, '/supportsearch/criteriasearch': {
      component: dynamicWrapper(app, [], () => import('../containers/DatamartSearch/DatamartSearch'),{"datamart":"support","mode":"criteria"}),
    },
    '/supportsearch/profilesearch': {
      component: dynamicWrapper(app, [], () => import('../containers/DatamartSearch/DatamartSearch'),{"datamart":"support","mode":"profile"}),
    }
  };
  // Get name from ./menu.js or just set it in the router data.
  const menuData = getFlatMenuData(getMenuData());

  // Route configuration data
  // eg. {name,authority ...routerConfig }
  const routerData = {};
  // The route matches the menu

  Object.keys(routerConfig).forEach((path) => {
    // Regular match item name
    // eg.  router /user/:id === /user/chen
    const pathRegexp = pathToRegexp(path);
    const menuKey = Object.keys(menuData).find(key => pathRegexp.test(`${key}`));
    let menuItem = {};
    // If menuKey is not empty
    if (menuKey) {
      menuItem = menuData[menuKey];
    }

    let router = routerConfig[path];
    // If you need to configure complex parameter routing,
    // https://github.com/ant-design/ant-design-pro-site/blob/master/docs/router-and-nav.md#%E5%B8%A6%E5%8F%82%E6%95%B0%E7%9A%84%E8%B7%AF%E7%94%B1%E8%8F%9C%E5%8D%95
    // eg . /list/:type/user/info/:id
    router = {
      ...router,
      name: router.name || menuItem.name,
      authority: router.authority || menuItem.authority,
    };
    routerData[path] = router;
  });
  return routerData;
};
