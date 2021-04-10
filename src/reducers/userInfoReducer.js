const userInfoReducer = (state = { name: 'Frank', age: 54 }, action) => {
  switch (action.type) {
    case 'UPDATE':
      state = {
        name: action.val.name,
        age: action.val.age
      };
      return state;
    case 'DELETE':
      state = {
        name: '',
        age: null
      };
      return state;
    default:
      return state;
  }
};

export default userInfoReducer;
