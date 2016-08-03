import React from 'react';
import NavBar from '../NavBar'
import DrumKidPlayer from '../DrumKidPlayer'

export default class Main extends React.Component {
	render() {
		return (
			<section className="section">
				<NavBar />
				<DrumKidPlayer />
				<div className="container">
        	{this.props.children}
				</div>
			</section>
		)
	}
}
