import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import ScrollToTop from './utils/ScrollToTop';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
