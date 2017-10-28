import { connect } from 'react-redux';
import FeedIndexItem from './feed_index_item';
import { addLike, deleteLike } from '../../../actions/photo_actions';

// const mapStateToProps = (state) => {
//   return{
//     photos: state.entities.photos,
//     currentUser: state.session.currentUser
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    addLike: (photoId) => dispatch(addLike(photoId)),
    deleteLike: (photoId) => dispatch(deleteLike(photoId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FeedIndexItem);
