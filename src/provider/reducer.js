export const globalStateReducer = (state, action) => { 
  switch(action.type) {
    case 'DATA/LOAD':
      return {
        ...state,
        usersList: action.payload
      };
    case 'DATA/UPDATE':
      return {
        ...state,
        userData: action.payload
      };
    case 'NOTIFICATION/SHOW':
      return {
        ...state,
        notification: {
          show: true,
          message: action.message,
        }
      };
    case 'NOTIFICATION/CLOSE':
      return {
        ...state,
        notification: {
          show: false,
          message: ''
        }
      };
    case 'USER/SET_AUTH_USER':
      return {
        ...state,
        userData: action.data,
      };
    default:
      return {
        ...state,
        error: true,
      };
  }
};