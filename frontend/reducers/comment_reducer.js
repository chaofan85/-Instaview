import { RECEIVE_COMMENT } from '../actions/photo_actions';
import merge from 'lodash/merge';

const CommentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENT:
      return merge({}, state, { [action.comment.id]: action.comment });
    default:
      return state;
  }
};

export default CommentsReducer;