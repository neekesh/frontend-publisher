import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root/rootComponent';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { library } from "@fortawesome/fontawesome-svg-core";

import { faStar, faCommentAlt, faShareAlt, faUserPlus} from "@fortawesome/free-solid-svg-icons";
library.add( faStar, faCommentAlt, faShareAlt, faUserPlus);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
