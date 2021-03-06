import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FOLLOWING } from "../actions/user_actions";
import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, {[action.user.username]: action.user});
    case RECEIVE_FOLLOWING:
      return merge({}, state, { [action.user.username]: action.user });
    case RECEIVE_CURRENT_USER:
      if (!action.user) {
        return {};
      } else {
        return merge({}, state, {[action.user.username]: action.user});
      }
    default:
      return state;

  }
};

export default UserReducer;
