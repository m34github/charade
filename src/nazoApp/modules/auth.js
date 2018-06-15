import { auth } from '../.env/firebase.config';

// action
const CHECK_AUTH = 'CHECK_AUTH';
const SIGN_IN = 'SIGN_IN';

const checkAuth = () => (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: CHECK_AUTH,
        payload: {
          user
        },
        meta: {
          isLoaded: true
        }
      });
    }
  });
};

const signIn = (email, password) => (dispatch) => {
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({
        type: SIGN_IN,
        meta: {
          isLoaded: true
        }
      });
    })
    .catch((err) => {
      dispatch({
        type: SIGN_IN,
        error: err
      });
    });
};

// reducer
const initialState = {
  isLoaded: false,
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_AUTH: {
      return Object.assign({}, state, {
        isLoaded: action.meta.isLoaded,
        user: action.payload.user
      });
    }
    case SIGN_IN: {
      return Object.assign({}, state, {
        meta: action.meta,
        error: action.error
      });
    }
    default: {
      return state;
    }
  }
};

export { checkAuth, signIn };
export default reducer;
