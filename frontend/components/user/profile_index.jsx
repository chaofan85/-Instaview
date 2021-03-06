import React from 'react';
import HeaderContainer from '../header_container';
import UserPhotoIndex from './user_photo_index';
import UserAvatarContainer from './user_avatar_container';
import { Link, withRouter } from 'react-router-dom';
import EditOrFollow from './edit_or_follow';
import FollowContainer from './follow_container';


class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { renderOptions: false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.userLogout = this.userLogout.bind(this);
  }

  openModal() {
    this.setState({ renderOptions: true });
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.setState({ renderOptions: false });
    document.body.style.overflow = 'visible';
  }

  userLogout() {
    this.closeModal();
    this.props.logout();
  }

  componentDidMount() {

    this.props.fetchUserInfo(this.props.pageOwner);
    this.props.fetchUserPhotos(this.props.pageOwner);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pageOwner !== this.props.pageOwner) {
      this.props.fetchUserInfo(nextProps.pageOwner);
      this.props.fetchUserPhotos(nextProps.pageOwner);

    }

  }

  render() {
    if (this.props.user) {
      return (
        <div className="profile-page">
          <HeaderContainer />

          <article className="profile-main">
            <section className="profile-header">
              <UserAvatarContainer
                user={this.props.user}
                currentUser={this.props.currentUser}
                pageOwner={this.props.pageOwner}
              />

              <div className="user-profile-info">
                <div className="user-profile-info-1">
                  <span className="user-profile-username">
                    {this.props.user ? this.props.user.username : null}
                  </span>

                  <EditOrFollow
                    user={this.props.user}
                    currentUser={this.props.currentUser}
                    pageOwner={this.props.pageOwner}
                  />

                  {this.props.currentUser.username ===
                  this.props.pageOwner ? (
                    <span
                      className="setting-options"
                      onClick={this.openModal}
                    />
                  ) : null}

                  {this.state.renderOptions ? (
                    <div className="user-info-edit">
                      <div className="modal-form">
                        <ul className="modal-options">
                          <li>
                            <button onClick={this.userLogout}>
                              Log Out
                            </button>
                          </li>
                          <li>
                            <button onClick={this.closeModal}>
                              Cancel
                            </button>
                          </li>
                        </ul>
                        <span
                          className="modal-close"
                          onClick={this.closeModal}
                        >
                          &times;
                        </span>
                      </div>
                      <div className="modal-bg" />
                    </div>
                  ) : null}
                </div>

                <ul className="user-profile-info-2">
                  <li>
                    <span>{this.props.user.post_number}</span>
                    {this.props.user.post_number > 1 ? " posts" : " post"}
                  </li>
                  <li>
                    <FollowContainer
                      pageOwner={this.props.pageOwner}
                      follows={this.props.currentUser.followers}
                      type="followers"
                    />
                  </li>
                  <li>
                    <FollowContainer
                      pageOwner={this.props.pageOwner}
                      follows={this.props.currentUser.followings}
                      type="following"
                    />
                  </li>
                </ul>

                <div className="user-profile-info-3">
                  <span />
                </div>
              </div>
            </section>

            {Object.values(this.props.photos).length ? (
              <UserPhotoIndex
                user={this.props.user}
                photos={this.props.photos}
              />
            ) : (
              <div className="no-post">No posts yet</div>
            )}
          </article>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(ProfileIndex);
