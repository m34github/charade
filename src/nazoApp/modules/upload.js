import { storage } from '../.env/firebase.config';

// action
const UPLOAD_FILE = 'UPLOAD_FILE';

const uploadFile = file => (dispatch) => {
  storage.ref().child(`sandbox/${file.name}`).put(file).then((snapshot) => {
    console.log('success');
  });
};

// reducer
const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_FILE: {
      return Object.assign({}, state, {
        myData: action.payload.myData
      });
    }
    default: {
      return state;
    }
  }
};

export { uploadFile };
export default reducer;
