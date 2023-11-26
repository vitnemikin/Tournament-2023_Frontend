const downloadReducer = (state = { downloadData: {} }, action) => {
    switch (action.type) {
      case "DOWNLOAD_GAME":
        return {
          ...state,
          downloadData: action.downloadData,
        };
      default:
        return state;
    }
  };
  
  export default downloadReducer;
  