import { connect } from 'react-redux';

import Home from '../components/Home.jsx';
import * as action from '../modules/home';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  loadMyData: () => {
    dispatch(action.loadMyData());
  },
  loadPublicData: () => {
    dispatch(action.loadPublicData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
