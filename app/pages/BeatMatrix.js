import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import * as Actions from '../actions/BeatActions';
import { Link } from 'react-router';

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: () => {
      dispatch(Actions.testAction());
    }
  }
}

class BeatMatrixComponent extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <NavBar activePage="listbeats" />
        <p>This will be a beat matrix</p>
      </div>
    )
  }
}


const BeatMatrix = connect(
  mapStateToProps,
  mapDispatchToProps
)(BeatMatrixComponent);

export default BeatMatrix;
