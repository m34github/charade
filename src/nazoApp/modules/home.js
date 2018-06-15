import { db } from '../.env/firebase.config';

// action
const LOAD_DATA = 'LOAD_DATA';

const loadData = user => (dispatch) => {
  db.ref('data').once('value')
    .then((snapshot) => {
      const myData = Object.values(snapshot.val()).filter(v => v.author === user.uid);
      const publicData = Object.values(snapshot.val()).filter(v => v.public === true);

      dispatch({
        type: LOAD_DATA,
        payload: {
          myData,
          publicData
        }
      });
    });
};

// reducer
const initialState = {
  myData: {},
  publicData: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA: {
      return Object.assign({}, state, {
        myData: action.payload.myData,
        publicData: action.payload.publicData
      });
    }
    default: {
      return state;
    }
  }
};

export { loadData };
export default reducer;
