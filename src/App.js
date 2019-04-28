import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { simpleAction } from './actions/sampleActions';
import { loadLiterals } from "./actions/lateralActions";
import loadLang from "./i18n";

function App(props) {
  console.log(props.literal.default);
  const obj  = props.literal.default;
  function changeTheLanguage(lang) {
    loadLang(lang).then(lan => props.changeLanguage(lan));
  }
  return (
    <div className="App">
    {obj && <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {obj.edit} <code>src/App.js</code> {obj.instruction}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {obj.learnReact}
        </a>
      </header>
      <pre>
      {
        JSON.stringify(props)
      }
      </pre>
      <button onClick={()=> props.simpleAction()}>Test redux action</button>
      <button onClick={()=> changeTheLanguage('de')}>Translate to German</button>
      <button onClick={()=> changeTheLanguage('en')}>Translate to English</button>
    </div>
    }
    </div>
  );
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  changeLanguage: (lang) => dispatch(loadLiterals(lang))
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
