import React from 'react';
import './App.css';
import Questions from '../Questions/Questions';

function App() {
  return (
    <div className="page">
      {/*<Header/>*/}
      <main className="content">
        <Questions/>
        {/*<Footer/>*/}
      </main>
    </div>
  );
}

export default App;
