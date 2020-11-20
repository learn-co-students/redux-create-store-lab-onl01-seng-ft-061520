// A function called createStore that takes in a reducer function as an argument
// createStore function should return an object with two methods- getState and dispatch

function createStore(candyReducer) {
  // state should be basic array of strings, or empty 
  let state; 

  // dispatch should take in an action, update the state using the reducer, and call the render function
  function dispatch(action) {
    state = candyReducer(state = [], action)
    render();
  }

  // getState should return the current state;
  function getState() {
    return state;
  }
  return {
    dispatch, 
    getState
  }
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

// Use your createStore function and the functions provided here to create a store.
// Once the store is created, call an initial dispatch.

let store = createStore(candyReducer)
store.dispatch({ type: '@@INIT' })