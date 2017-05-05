import renderSlides from './slides/slides.pug';

export default (locals, callback) => {
  callback(null, renderSlides({ NODE_ENV: process.env.NODE_ENV }));
};
