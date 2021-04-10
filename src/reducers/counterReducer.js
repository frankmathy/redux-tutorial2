const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + parseInt(action.value);
    case 'DECREMENT':
      return state - parseInt(action.value);
    default:
      return state;
  }
};

export default counterReducer;
