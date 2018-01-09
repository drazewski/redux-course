import { CLICKED } from '../actions/clickAction';

const clickEvent = (state = {
    clicked: false,
}, action) => {
  switch (action.type) {
    case CLICKED:
      return {
        ...state,
        clicked: true,
      };
    default:
      return state;
  }
};

export default clickEvent;
