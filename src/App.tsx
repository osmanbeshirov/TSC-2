import React from 'react';

import './App.css';

// Conventional props
const Heading = ({ title }: { title: string }) => {
  return (
    <h1>{title}</h1>
  )
}

function App() {
  return (
    <div>
      <Heading title='Hi Guys' />
    </div>
  );
}

export default App;
