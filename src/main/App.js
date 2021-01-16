import React from 'react';

import Routes from './Routes';
import Navbar from '../components/Navbar';

import 'bootswatch/dist/flatly/bootstrap.css';
import '../custom.css';

class App extends React.Component {

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Routes />
        </div>
      </>
    )
  }
}

export default App;
