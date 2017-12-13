import {reducer} from './todo';
//If export as deafult import without brackets
//import reducer from './todo'


describe('Todo REducer', () => {
    test("return a state object", () => { 
    const result = reducer(undefined, {type:'ANYTHING'})
    expect(result).toBeDefined();
    });
});

