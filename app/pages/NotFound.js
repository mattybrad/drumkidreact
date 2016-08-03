import React from 'react';
import NavBar from '../components/NavBar';

export default class NotFoundComponent extends React.Component {
  render() {
    return (
      <div>
        <p>No route found for this URL.</p>
      </div>
    )
  }
}
