import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ToggleLoading from "./component/inizializestate";
import ColorPicker from "./component/colorpicker";
import EmailTextInput from "./component/statesetteroutjsx";
import Counter from "./component/setfromprevstate";
import PersonalPizza from "./component/arrayinstate";
import Login from "./component/objectinstate";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToggleLoading />
    <ColorPicker />
    <EmailTextInput />
    <Counter />
    <PersonalPizza />
    <Login />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
