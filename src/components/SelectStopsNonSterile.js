import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, ImageButton } from './common';
import Style from './Style';
import { cnbc, cnn, latapenade, octravelmart, starbucks, zovs } from '../../assets';
import { Actions } from 'react-native-router-flux';


class SelectStopsNonSterile extends Component {

	constructor(props) {
		super(props);

		this.state = {
			wheelchairNumber: this.props.wheelchairNumber,
			boardingPass: this.props.boardingPass,
			gateNumber: this.props.gateNumber
		}
	}

	onButtonPress() {
		Actions.main();
	}


	render() {
		return (
			<View style={Style.container}>
				<View style={Style.content}>
					<View style={Style.row}>
						<ImageButton 
							source={cnbc} 
							onPress={this.onButtonPress.bind(this)}
						/>
						<ImageButton 
							source={cnn} 
							onPress={this.onButtonPress.bind(this)}
						/>
						

					</View>
					<View style={Style.row}>
							<ImageButton 
							source={latapenade} 
							onPress={this.onButtonPress.bind(this)}
						/>
						<ImageButton 
							source={octravelmart} 
							onPress={this.onButtonPress.bind(this)}
						/>
						
					</View>
					<View style={Style.row}>
							<ImageButton 
							source={starbucks} 
							onPress={this.onButtonPress.bind(this)}
						/>
						<ImageButton 
							source={zovs} 
							onPress={this.onButtonPress.bind(this)}
						/>
						
					</View>
				</View>
				<View style={Style.footer}>
					<Text>Wheelchair #: {this.state.wheelchairNumber}</Text>
        	<Text>Boarding Pass Info: {this.state.boardingPass}</Text>
          <Text>Destination Gate #: {this.state.gateNumber}</Text>
        </View>
			</View>
		);
	}


}

export default SelectStopsNonSterile;