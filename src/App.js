// App.js
import './App.css';
import { useState } from 'react';
import Button from './Button'; // Import the Button component
import Display from './Display';

function App() {
  const [count, setCount] = useState(0);

  const incremented = (increment) => {
    setCount(count + increment);
  };

  return (
    <div>
      {/* Pass the required props to the Button component */}
      <Button onClickFunction={incremented} increment={1} />

      <Button onClickFunction={incremented} increment={5} />
      <Button onClickFunction={incremented} increment={10} />
      <Button onClickFunction={incremented} increment={100} />
      <Button onClickFunction={incremented} increment={1000} />

      <Display message={count}></Display>
    </div>
  );
}

export default App;
