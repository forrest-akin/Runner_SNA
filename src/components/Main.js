import React, { Component } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { updateCurrentPosition } from '../actions';
import { Card, CardSection, Button } from './common';

class Main extends Component {
	
	componentWillMount() {

		Keyboard.dismiss();

    navigator.geolocation.getCurrentPosition((position) => {
    	this.props.updateCurrentPosition(position);
    });

    navigator.geolocation.watchPosition((position) => {
    	this.props.updateCurrentPosition(position);
    });
	}

	onDeparture() {
    Actions.selectStartingPoint({runType: 'departure'});
  }

  onArrival() {
  	Actions.arrival({runType: 'arrival'});
  }

  onCheckIn() {
  	Actions.checkIn();
  }

	render() {
		return (
			<Card>
				<CardSection>
					<Button onPress={this.onDeparture.bind(this)}>Departure</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onArrival.bind(this)}>Arrival</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onCheckIn.bind(this)}>Check-In</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = ({ departure }) => {
  const { currentGPS } = departure;

  return { currentGPS };
};

export default connect(mapStateToProps, { updateCurrentPosition })(Main);