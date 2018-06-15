import { connect } from 'react-redux';

import Home from '../components/Home.jsx';
import * as action from '../modules/home';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  loadData: (user) => {
    dispatch(action.loadData(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
