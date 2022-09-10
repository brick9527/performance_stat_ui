const initState = {
  batchId: null
};

const reducer = (state = initState, action) => {
  switch(action.type) {
    case 'batchId/set':
      return { ...state, batchId: action.value };
    default:
      return state;
  }
}

export default reducer;