import {INCREMENT, DECREMENT} from '../actions/counterAction';

const counter = ( counter = {clickCounter: 0, dupa: 'aaa'}, action ) => {
	
	switch (action.type) {
		case "INCREMENT":
	  return Object.assign({}, counter, {clickCounter: ++counter.clickCounter })
    // return {
    //     ...counter,
    //     clickCounter: ++counter.clickCounter 
    //   };
		case "DECREMENT":
		return Object.assign({}, counter, {clickCounter: --counter.clickCounter });
      // return {
      //   ...counter,
      //   clickCounter: --counter.clickCounter
      // };
		default:
			return counter;
	}
}

export default counter;