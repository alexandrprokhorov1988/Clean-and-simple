import React from 'react';
import './Newsletter.css';

function Newsletter() {
  const [value, setvalue] = React.useState('');

  function handleChange(e) {
    setvalue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) {
      return;
    }
    console.log(value);
  }

  return (
    <section className="newsletter">
      <div className="newsletter__column">
        <h3 className="newsletter__title">Sign up for newsletter</h3>
        <p className="newsletter__subtitle">Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero
          alterum.</p>
      </div>
      <form action="#" method="post" className="newsletter__form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="newsletter__input"
          minLength="2"
          maxLength="200"
          required
          placeholder="Email address"
          value={value || ''}
          onChange={handleChange}
        />
        <input className="newsletter__submit-button"
               type="submit"
               name="submit"
               value="Save me"
        />
      </form>
    </section>
  )
}

export default Newsletter;
