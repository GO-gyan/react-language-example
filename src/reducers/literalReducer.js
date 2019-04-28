const defaultState = {};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'LOAD_LITERALS':
      return payload;
    default:
      return state;
  }
};
