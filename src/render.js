import renderSlides from './slides/slides.pug';

export default (locals, callback) => {
  callback(null, renderSlides());
};
