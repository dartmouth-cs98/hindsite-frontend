import * as types from '../../constants/ActionTypes';
import * as urls from '../../constants/GlobalConstants';
import fetch from 'isomorphic-fetch'

const getTabsEndpoint = urls.BASE_URL + "tabinfo/";

export function receiveTabs(json) {
  console.log("TABS RECEIVE", json);
  return {
    type: types.RECEIVE_TABS,
    tabs: json
  }
}

// TODO: add requests for specific users
export function requestTabs() {
  return {
    type: types.REQUEST_TABS
  }
}


export function getAllTabs(p_month, p_day, p_year){

  return dispatch => {
    dispatch(requestTabs())
    return fetch(getTabsEndpoint, {
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
             method: "POST",
             body: JSON.stringify({month: p_month, day: p_day, year:p_year})
           }
      )
      .then(response => response.json())
      .then(json => dispatch(receiveTabs(json)))
  }
}
