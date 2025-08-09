
import { useState } from 'react';

import './Counter.css';

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="counter">
      <p>Compteur: {count}</p>
      <button onClick={increment}>Incrémenter</button>
    </div>
  );
};

