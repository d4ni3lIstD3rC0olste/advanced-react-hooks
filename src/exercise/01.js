// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function counterReducer(previousState, action) {
  if (action.type === 'INCREMENT') {
    const {count: previousCount} = previousState;
    return {count: previousCount + action.step};
  } else {
    throw new Error(`unsupported action.type ${action.type}`);
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(counterReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
