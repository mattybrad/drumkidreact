import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
          <div className="nav-left">
            <Link to="/">Home</Link><span> </span>
            <Link to="/listbeats">List Beats</Link><span> </span>
            <Link to="/matrix">Matrix</Link><span> </span>
          </div>
        </div>
        <br/>
      </div>
    )
  }
}
