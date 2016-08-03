import React from 'react';

export default class DrumKidPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.audioContext = null;
    this.outputNode = null;
    this.oscillator = null;
  }
  componentDidMount() {
     this.audioContext = new (AudioContext||webkitAudioContext)();
     this.outputNode = this.audioContext.createGain();
     this.outputNode.connect(this.audioContext.destination);
     this.outputNode.gain.value = 0.1;
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.freq != nextProps.freq) {
      if(this.oscillator) this.oscillator.frequency.value = nextProps.freq;
    }
  }
  playBeat() {
    // temp thing to demonstrate web audio working
    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.type = 'square';
    this.oscillator.frequency.value = this.props.freq;
    this.oscillator.connect(this.outputNode);
    this.oscillator.start();
  }
  stopBeat() {
    if(this.oscillator) this.oscillator.stop();
  }
  render() {
    return (
      <div>
        <a onClick={this.playBeat.bind(this)}>Play</a><span> </span>
        <a onClick={this.stopBeat.bind(this)}>Stop</a><span> </span>
      </div>
    )
  }
}

DrumKidPlayer.defaultProps = {
  freq: 220
}
