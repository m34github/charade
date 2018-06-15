import { connect } from 'react-redux';

import Auth from '../components/Auth.jsx';
import * as action from '../modules/auth';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  checkAuth: () => {
    dispatch(action.checkAuth());
  },
  signIn: (email, password) => {
    dispatch(action.signIn(email, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
