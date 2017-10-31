import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { addComment, fetchUserInfo } from './util/photo_api_util';
import {fetchUserInfo, followUser} from './actions/user_actions';
import merge from 'lodash/merge';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {

    const photos = window.currentUser.photos;
    delete window.currentUser["photos"];

    const preloadedState = {
      session: { currentUser: window.currentUser },
      entities: { photos: photos }
     };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  window.store = store;
  window.dispatch = store.dispatch;
  window.fetchUserInfo = fetchUserInfo;
  window.merge = merge;
  window.followUser = followUser;

  ReactDOM.render(<Root store={ store } />, root);
});
