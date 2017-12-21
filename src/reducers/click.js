import { CLICKED, NOT_CLICKED } from '../actions/clickAction';

const clickEvent = (state = {
    clicked: false,
}, action) => {
  switch (action.type) {
    case CLICKED:
      return {
        ...state,
        clicked: true,
      };
    case NOT_CLICKED:
      return {
        ...state,
        clicked: false,
      };
    default:
      return state;
  }
};

export default clickEvent;
