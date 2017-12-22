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

// const counter = ( clickCounter=0, action ) => {
	
// 	switch (action.type) {
// 		case "INCREMENT":
//     	return clickCounter = clickCounter + 1
//     case "DECREMENT":
// 			return clickCounter = clickCounter - 1
// 		default:
// 			return clickCounter;
// 	}
// }

export default counter;