import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Questions from '../Questions/Questions';
import Quotes from '../Quotes/Quotes';
import Blog from '../Blog/Blog';
import Stats from '../Stats/Stats';
import Features from '../Features/Features';
import Plan from '../Plan/Plan';
import {QUESTIONS} from '../../utils/constants';
import Customers from "../Customers/Customers";
import GetStarted from "../GetStarted/GetStarted";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <Route exact path="*">
      <Header/>
      <main className="content">
        <Hero/>
        <Customers/>
        <Plan/>
        <Features/>
        <Stats/>
        <Blog/>
        <Quotes/>
        <Questions
          questions={QUESTIONS}
        />
        <GetStarted/>
        <Newsletter/>
      </main>
      <Footer/>
      </Route>
    </div>
  );
}

export default App;
