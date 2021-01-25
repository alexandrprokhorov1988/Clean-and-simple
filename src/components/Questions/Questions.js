import React from 'react';
import './Questions.css';
import Question from '../../components/Question/Question';

function Questions({questions}) {

  return (
    <section className="questions">
      <p className="questions__text">Customer help</p>
      <h2 className="questions__title">Frequently asked questions</h2>
      {questions.map((item) => (
        <Question key={item.id}{...item}/>
      ))}
    </section>
  );
}

export default Questions;
