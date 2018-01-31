import React from 'react';
import FollowButtonContainer from './follow_button_container';

class FollowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserInfo(this.props.username);
  }

  render() {
    console.log(this.props);
    return (
      <div className="follow-item">
        <div><img src={this.props.avatarUrl}/></div>
        <div>{this.props.username}</div>
        {
          this.props.currentUser !== this.props.username ?
          <FollowButtonContainer pageOwner={this.props.username}
            followed_by_current_user={this.props.followed}/> : null
        }
      </div>
    );
  }
}

export default FollowItem;
