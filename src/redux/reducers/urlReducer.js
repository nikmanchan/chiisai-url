const urlReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_URL_DATA':
        return action.payload;
      case 'CLEAR_URL_DATA':
        return [];
      default:
        return state;
    }
  };
  
  // url data will be on the redux state at:
  // state.urlData
  export default urlReducer;
  