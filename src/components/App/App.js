import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Questions from '../Questions/Questions';
import Quotes from '../Quotes/Quotes';
import Blog from '../Blog/Blog';
import Stats from '../Stats/Stats';
import Features from '../Features/Features';
import Plan from '../Plan/Plan';
import {QUESTIONS} from '../../utils/constants';
import Customers from "../Customers/Customers";

function App() {
  return (
    <div className="page">
      <Header/>
      <main className="content">
        <Customers/>
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
