export const globalStateReducer = (state, action) => {
  const {type, data} = action;
  switch(type) {
    case 'update':
      return {
        ...state,
        usersList: data.data
      }
    case 'notification':
      return {
        ...state,
        notification: {
          show: action.show,
          message: action.message,
        }
      }
    case 'auth':
      return {
        ...state,
        data: action.userData,
        authenticatedUser: {
          id: action.userData._id
        }
      }
    default:
      return {
        data: {},
        error: false,
      }
  }
};