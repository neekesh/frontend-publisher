import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root/rootComponent';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faUser, faBell , faFeather, faStar, faCommentAlt, faShareAlt, faSearch, faSignInAlt, faUserPlus} from "@fortawesome/free-solid-svg-icons";

library.add( faHouse, faUser, faBell, faFeather, faStar, faCommentAlt, faShareAlt, faSearch, faSignInAlt, faUserPlus);

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
