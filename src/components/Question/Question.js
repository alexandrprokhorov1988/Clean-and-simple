import React from 'react';
import './Question.css';

function Question({ question, answer }) {
  const [isOpen, setIsopen] = React.useState(false);

  function handleClick() {
    setIsopen(!isOpen);
  }

  return (
    <article className="question">
      <div className="question__container question__container_type_question" onClick={handleClick}>
        <span className={`question__icon ${isOpen ? 'question__icon_type_up' : 'question__icon_type_down'}`}/>
        <p className={`question__question ${isOpen ? 'question__question_active' : ''}`}>
          {question}
        </p>
      </div>
      <div
        className={`question__container question__container_type_answer ${isOpen ? 'question__container_active' : ''}`}>
        <p className="question__answer">
          {answer}
        </p>
        <button className="question__button">Go to documentation</button>
      </div>
    </article>
  );
}

export default Question;
