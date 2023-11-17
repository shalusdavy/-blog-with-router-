import React from 'react';
import ReactDOM from 'react-dom';
import BlogRouter from './Data-flow/blog_router';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BlogRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
