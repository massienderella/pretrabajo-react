import React, { Component } from 'react';

//components
import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Content />
      <Footer />
      </div>
    );
  }
}

export default App;