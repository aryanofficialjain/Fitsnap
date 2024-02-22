import React, { useContext } from 'react';
import { Context } from './context/ContextResultProvider';

const App = () => {
  const { muscle, setMuscle, result } = useContext(Context);

  return (
    <div>
      <input type="text" value={muscle} onChange={(e) => setMuscle(e.target.value)} />
      <div>
        {result.map((item, index) => (
          <div key={index}>
            <h1>{item.name}</h1>
            <p>{item.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
