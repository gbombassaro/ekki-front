export default (state, action) => {
  const {type, data} = action;
  switch(type) {
    case 'update':
      return {
        ...state,
        data: data.data
      }
    case 'notification':
      return {
        ...state,
        notification: {
          show: action.show,
          message: action.message,
        }
      }
    default:
      return {
        data: {},
        error: false,
      }
  }
};