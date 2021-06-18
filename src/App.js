import logo from './logo.svg';
import './App.css';

import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation('translation');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {
            t('app.edit_app')
          }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {
            t('app.link')
          }
        </a>
      </header>
    </div>
  );
}

export default App;
