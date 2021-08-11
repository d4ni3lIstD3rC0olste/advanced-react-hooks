// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext();

function CountProvider(props) {
  const [count, setCount] = React.useState(0);
  const value = [count, setCount];
  return <CountContext.Provider {...props} value={value}/>
}

function useCount() {
  if (!React.useContext(CountContext)) {
    throw new Error('useCount must be used within a CountProvider');
  }
  const [count, setCount] = React.useContext(CountContext);
  return [count, setCount];
}

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const [count] = useCount();
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const [, setCount] = useCount();
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
