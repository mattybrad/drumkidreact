import React from 'react';
import { connect } from 'react-redux';
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
    fetchBeats: () => {
      dispatch(Actions.fetchBeats());
    }
  }
}

class ListBeatsComponent extends React.Component {
  componentDidMount() {
    this.props.fetchBeats();
  }
  deleteBeat(beatID) {
    var reallyDelete = confirm("Are you sure you want to delete this beat?"+beatID);
    //if(reallyDelete) this.props.deleteEntry(beatID);
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.beats.map(function(beat, idx){
                return (
                  <tr key={`beat_${idx}`}>
                    <td>{beat.name}</td>
                    <td>{beat._id}</td>
                    <td><a onClick={this.deleteBeat.bind(this,beat._id)}>Delete</a></td>
                  </tr>
                )
              }.bind(this))
            }
          </tbody>
        </table>
      </div>
    )
  }
}


const ListBeats = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListBeatsComponent);

export default ListBeats;
