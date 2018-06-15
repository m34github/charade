import { db, storage } from '../.env/firebase.config';

// action
const UPLOAD_FILE = 'UPLOAD_FILE';

const uploadFile = (user, info) => (dispatch) => {
  dispatch({
    type: UPLOAD_FILE,
    meta: {
      uploading: true
    }
  });

  storage.ref(user.uid).child(info.file.name).put(info.file).then((snapshot) => {
    snapshot.ref.getDownloadURL().then((url) => {
      db.ref('data').push({
        author: user.uid,
        fee: info.fee,
        file: url,
        message: info.message,
        name: info.file.name,
        path: Date.now(),
        public: info.public,
        thumbnail: info.thumbnail,
        title: info.title
      })
        .then(() => {
          dispatch({
            type: UPLOAD_FILE,
            meta: {
              uploaded: true,
              uploading: false
            }
          });
        });
    });
  });
};

// reducer
const initialState = {
  uploaded: false,
  uploading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_FILE: {
      return Object.assign({}, state, {
        uploaded: action.meta.uploaded,
        uploading: action.meta.uploading,
        error: action.error
      });
    }
    default: {
      return state;
    }
  }
};

export { uploadFile };
export default reducer;
