import { connect } from 'react-redux';

import Upload from '../components/Upload.jsx';
import * as action from '../modules/upload';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  uploadFile: (user, info) => {
    dispatch(action.uploadFile(user, info));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
