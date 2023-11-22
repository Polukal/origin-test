import React from 'react';

function App() {
  const copyText = () => {
    navigator.clipboard.writeText("Text to copy").then(() => {
      alert("Text copied!");
    }, (err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={copyText}>Copy Text</button>
      </header>
    </div>
  );
}

export default App;
