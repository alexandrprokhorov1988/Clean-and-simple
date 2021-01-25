import React from 'react';
import './Blog.css';
import BlogSlide from '../../components/BlogSlide/BlogSlide';
import {SLIDES_IMGS} from '../../utils/constants';

function Blog() {
  const [current, setCurrent] = React.useState(0);
  const length = SLIDES_IMGS.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // React.useEffect(() => {
  //   const timeout = setTimeout(nextSlide, 5000);
  //   return () => clearTimeout(timeout);
  // }, [current]);

  function handleClickBtn(e) {
    setCurrent(e.target.value - 1);
  }

  return (
    <section className="blog">
      <p className="blog__text">OUR RESOURCES</p>
      <h2 className="blog__title">Start reading our blog</h2>
      <div className="blog__container">
        <button className="blog__arrow blog__arrow_type_left" onClick={prevSlide}/>
        {SLIDES_IMGS.map((item, index) => {
          return (
            <div
              className={`blog__slide ${index === current ? 'blog__slide_active' : ''}`}
              key={item.id}
            >
              {current === index && (
                <BlogSlide
                  key={item.id} {...item}
                  active={current === index}
                />
              )}
            </div>
          )
        })}
        <button className="blog__arrow blog__arrow_type_right" onClick={nextSlide}/>
      </div>
      <div className="blog__button-container">
        {SLIDES_IMGS.map((item, index) => (
          <button
            key={item.id}
            value={index + 1}
            onClick={handleClickBtn}
            className={`blog__button ${current === index ? 'blog__button_active' : ''}`}/>
        ))}
      </div>
    </section>
  )
}

export default Blog;
