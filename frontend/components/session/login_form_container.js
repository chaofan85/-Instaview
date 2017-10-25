import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions.js';

const mapStateToProps = (state, ownProps) => {
  const userInfo = {
    username: "",
    password: "",
  };

  return {
    userInfo,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
