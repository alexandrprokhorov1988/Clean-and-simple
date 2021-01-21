import React from 'react';
import './App.css';
import Questions from '../Questions/Questions';
import Quotes from '../Quotes/Quotes';
import Blog from '../Blog/Blog';
import Stats from '../Stats/Stats';
import Features from '../Features/Features';
import Plan from '../Plan/Plan';
import {QUESTIONS} from '../../utils/constants';

function App() {
  return (
    <div className="page">
      {/*<Header/>*/}
      <main className="content">
        <Plan/>
        <Features/>
        <Stats/>
        <Blog/>
        <Quotes/>
        <Questions
          questions={QUESTIONS}
        />
        {/*<Footer/>*/}
      </main>
    </div>
  );
}

export default App;
