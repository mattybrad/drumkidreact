import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar'
import DrumKidPlayer from '../DrumKidPlayer'

const mapStateToProps = (state) => {
  return {
    testFreq: state.Beats.testFreq
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default class MainComponent extends React.Component {
	render() {
		return (
			<section className="section">
				<NavBar />
				<DrumKidPlayer freq={this.props.testFreq} />
				<div className="container">
        	{this.props.children}
				</div>
			</section>
		)
	}
}

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);

export default Main;
