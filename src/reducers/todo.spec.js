import reducer from './todo';
//If export as deafult import without brackets
//import reducer from './todo'


describe('Todo REducer', () => {
  test.skip("return a state object", () => { 
  const result = reducer(undefined, {type:'ANYTHING'})
  expect(result).toBeDefined();
  });

  test("adds a todo", () => {
    const startState ={
      todos: [
        { id: 1, name: 'choice 1', isComplete: true  },
        { id: 2, name: 'choice 2', isComplete: true  },
        { id: 3, name: 'choice 3', isComplete: true  }
      ]
    }
    const expectedState = {
      todos: [
        { id: 1, name: 'choice 1', isComplete: true },
        { id: 2, name: 'choice 2', isComplete: true },
        { id: 3, name: 'choice 3', isComplete: true },
        { id: 4, name: 'choice 4', isComplete: false }
      ]
    }

    const action = { type: 'TODO_ADD', payload: { id: 4, name: 'choice 4', isComplete: false } }
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState);
  })
});

