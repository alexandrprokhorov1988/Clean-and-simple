import React from 'react';
import './BlogSlide.css';

function BlogSlide({ active = false, images, title }) {

  return (
    <article className={`blog-slide ${active ? 'blog-slide_active' : '' }`}>
      <div className="blog-slide__img-container">
        <img className="blog-slide__img blog-slide__img_type_one" src={images.one} alt="Картинка"/>
        <img className="blog-slide__img blog-slide__img_type_two" src={images.two} alt="Картинка"/>
        <img className="blog-slide__img blog-slide__img_type_three" src={images.three} alt="Картинка"/>
      </div>
      <div className="blog-slide__description-container">
        <h2 className="blog-slide__title">{title}</h2>
        <p className="blog-slide__subtitle">Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit
          tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti
          periculis vis ei, quas tibique pro at, eos ut decore ...
        </p>
        <div className="blog-slide__button-container">
          <button className="blog-slide__button">Read now</button>
          <button className="blog-slide__button blog-slide__button_type_add">Add to your bookmarks</button>
        </div>
      </div>
    </article>
  )
}

export default BlogSlide;
