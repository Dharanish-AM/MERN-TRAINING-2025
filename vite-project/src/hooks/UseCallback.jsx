
import React, { useState, useCallback } from 'react';


const ChildComponent = React.memo(({ onButtonClick, value }) => {
  console.log('ChildComponent re-rendered');
  return (
    <div>
      <p>Child Value: {value}</p>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  );
});

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [childValue, setChildValue] = useState('Hello');

  
  const handleChildClick = useCallback(() => {
    console.log('Child button clicked!');
  }, []);

  return (
    <div>
      <h1>Parent Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Parent Count</button>
      <button onClick={() => setChildValue(childValue === 'Hello' ? 'World' : 'Hello')}>
        Toggle Child Value
      </button>
      <ChildComponent onButtonClick={handleChildClick} value={childValue} />
    </div>
  );
};

export default UseCallback;
