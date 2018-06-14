import axios from 'axios';

// action
const LOAD_MY_DATA = 'LOAD_MY_DATA';
const LOAD_PUBLIC_DATA = 'LOAD_PUBLIC_DATA';

const loadMyData = () => (dispatch) => {
  axios.get('http://localhost:5000/assets/data/database.json')
    .then((d) => {
      const myData = Object.values(d.data.data).filter(v => v.author === '#user1');

      dispatch({
        type: LOAD_MY_DATA,
        payload: {
          myData
        }
      });
    });
};

const loadPublicData = () => (dispatch) => {
  axios.get('http://localhost:5000/assets/data/database.json')
    .then((d) => {
      const publicData = Object.values(d.data.data).filter(v => v.public === true);

      dispatch({
        type: LOAD_PUBLIC_DATA,
        payload: {
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
    case LOAD_MY_DATA: {
      return Object.assign({}, state, {
        myData: action.payload.myData
      });
    }
    case LOAD_PUBLIC_DATA: {
      return Object.assign({}, state, {
        publicData: action.payload.publicData
      });
    }
    default: {
      return state;
    }
  }
};

export { loadMyData, loadPublicData };
export default reducer;
