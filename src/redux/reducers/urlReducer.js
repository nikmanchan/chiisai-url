const urlReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_URL_DATA':
        return [...state, action.payload];
      case 'CLEAR_URL_DATA':
        return [];
      default:
        return state;
    }
  };
  
  // url data will be on the redux state at:
  // state.urlData
  export default urlReducer;
  