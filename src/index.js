import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import * as serviceWorker from './serviceWorker';
import ThemeContextProvider from './contexts/ThemeContext';
import ChallengeContextProvider from './contexts/ChallengeContext';

const AppConnector = () => {
    return (
        <ThemeContextProvider>
            <ChallengeContextProvider>
                <App />
            </ChallengeContextProvider>
        </ThemeContextProvider>
    )
}

ReactDOM.render(<AppConnector />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
