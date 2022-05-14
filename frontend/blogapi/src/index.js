import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import {
    Route,
    BrowserRouter as Router,
    Routes as Switch,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

// const routing = (
//     <Router>
//         <React.StrictMode>
//             <Header />
//             <Switch>
//                 <Route exact path="/" component={App} />
//             </Switch>
//             <Footer />
//         </React.StrictMode>
//     </Router>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <React.StrictMode>
            <Header />
            <Switch>
                <Route exact path="/" element={App()} />
            </Switch>
            <Footer />
        </React.StrictMode>
    </Router>
);
