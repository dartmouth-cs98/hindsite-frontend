import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk'

import * as PopupConstants from './constants/PopupConstants.js'

import { Router, hashHistory, browserHistory } from 'react-router';
import routes from './routes';

import App from './components/app';
import './../chrome/css/app.css';
import './../chrome/css/popup.css';

let store = createStore(
  rootReducer,
  { blacklist: {
      urls: [],
      blacklistTextEntry: ""
    },
    categories: {
      cats: [],
      editCategory: "",
      newCategoryName: ""
    },
    currentPage: {
      url: "",
      title: "",
      categories: [],
      star: false
    },
    currentTabs:[],
    currentTime:{
      start_date:"",
      end_date:""
    },
    currentDomainDisplayed:{
    },
    categoriesAndPages:{
      catsPages:[],
      starred:[],
      showStarred: false
    },
    currentSearchCategories: {
      multiSelect: false,
      searchCats: []
    },
    currentUser: {
      user_name:"",
      token:"",
      invalid_login:false,
      change_password:false,
      popup_status:PopupConstants.Loading
    }
  },
  applyMiddleware(
    thunkMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('hindsite')
);
