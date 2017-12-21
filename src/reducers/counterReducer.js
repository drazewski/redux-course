import {INCREMENT, DECREMENT} from '../actions/counterAction';
const counter = ( counter = {clickCounter: 0}, action ) => {
	switch (action.type) {
		case "INCREMENT":
    return {
        ...counter,
        clickCounter: counter.clickCounter + 1
      };
    case "DECREMENT":
      return {
        ...counter,
        clickCounter: counter.clickCounter - 1
      };
		default:
			return counter;
	}
}

export default counter;