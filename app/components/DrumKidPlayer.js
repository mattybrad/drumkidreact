import React from 'react';

export default class DrumKidPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
     var audioContext = new (AudioContext||webkitAudioContext)();
     var outputNode = audioContext.createGain();
     outputNode.connect(audioContext.destination);
     outputNode.gain.value = 0.1;
     this.setState({
       audioContext,
       outputNode
     })
  }
  playBeat() {
    // temp thing to demonstrate web audio working
    var oscillator = this.state.audioContext.createOscillator();
    oscillator.type = 'square';
    oscillator.frequency.value = 440;
    oscillator.connect(this.state.outputNode);
    oscillator.start();
    this.setState({
      oscillator
    })
  }
  stopBeat() {
    if(this.state.oscillator) this.state.oscillator.stop();
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
