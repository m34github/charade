import { connect } from 'react-redux';

import Upload from '../components/Upload.jsx';
import * as action from '../modules/upload';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  uploadFile: (file) => {
    dispatch(action.uploadFile(file));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
