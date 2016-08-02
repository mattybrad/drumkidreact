import React from 'react';
import NavBar from '../components/NavBar';

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <NavBar activePage="home" />
        <p>This will be the home page.</p>
      </div>
    )
  }
}
