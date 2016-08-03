import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import NavBar from '../components/NavBar';
import * as Actions from '../actions/BeatActions';
import { Link } from 'react-router';

const mapStateToProps = (state) => {
  return {
    beats: state.Beats.beats
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeat: (beatID) => {
      dispatch(Actions.fetchBeat(beatID));
    },
    updateBeat: (beatID) => {
      dispatch(Actions.updateBeat(beatID));
    },
    createBeat: (beatData) => {
      dispatch(Actions.createBeat(beatData));
    }
  }
}

class BeatFormComponent extends React.Component {
  componentDidMount() {

  }
  onSubmit(ev) {
    ev.preventDefault();
    this.props.createBeat({
      name: this.refs.nameInput.value
    })
    // should probs check for errors or something but whatever
    browserHistory.push('/listbeats');
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Name</label><br/>
          <input ref="nameInput" type="text" /><br/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}


const BeatForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(BeatFormComponent);

export default BeatForm;
