import initialState from './state';
import db from '../modules/utilities/db'

const reducer = (state, action) => {
    switch(action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + 1
        };
                              
        case 'RESET':
          localStorage.clear();
          indexedDB.deleteDatabase(db.DB);
          return initialState;

        case 'ADDUSER':
          let newState = {...state, count: state.count + 1, users: { ...state.users } };
          newState.users[action.value] = newState.users[action.value] || { name: action.value, id: newState.count };
          return newState;

        case "DELETE_USER":
          let delState = {...state, users: { ...state.users } };
          delete delState.users[action.value];
          return delState;

        case "SET_ACTIVE":
          return { ...state, active: action.value };

        case "SET_COLLECTION":
          return { ...state, collection: action.value };

        case "SET_SORT":
          return { ...state, sort: action.value };

        case "SAVE":
          let key = "COLLECTION_" + action.user;
          db.add(db.DETAILS, key, action.value);
          let sstate = { ...state };
          sstate.details[action.user] = key;
          return sstate;
          
      default:
        return state;
    }
  }
  
  export { reducer };