import React from 'react';

export default class DrumKidPlayer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  playBeat() {
    alert("PLAY");
  }
  stopBeat() {
    alert("STOP");
  }
  render() {
    return (
      <div>
        <a onClick={this.playBeat}>Play</a><span> </span>
        <a onClick={this.stopBeat}>Stop</a><span> </span>
      </div>
    )
  }
}
