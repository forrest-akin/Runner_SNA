import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux'
import { Button, CardSection, ImageButton } from './common';
import Footer from './Footer';
import Style from './Style';
import { 
	hudsonnews, hudsonnewsdiscoveroc, ocmarket, ripcurl, sunglasshut, cpk, mcdonalds, starbucks, farmersmarket, rubys, rubystogo,
	brookstone, xpresspa, southcoastnews, beachfrontnews, inmotion, vinovolo, hobie, javis, jerrysdogs, pinkberry, peiwei, subway, zovs,
	cnn, cnbc, belgiumbeerbar, carlsjr, ciao, ducks, restroom, phone
 } from '../../assets';
import { Actions } from 'react-native-router-flux';

class SelectStopsSterile extends Component {

	constructor(props) {
		super(props);

		this.state = {
			terminal: 'a'
		}
	}

	onButtonPress() {
		console.log('this.props in SelectStopsSterile:', this.props)
		
	}

	renderButtons() {
		console.log(this.state.terminal, 'yo')
		switch(this.state.terminal) {
			case 'a':
				return (
					<View style={Style.content}>
						<View style={Style.row}>
							<Button onPress={() => this.setState({terminal: 'a'})}>Terminal A</Button>
							<Button onPress={() => this.setState({terminal: 'b'})}>Terminal B</Button>
							<Button onPress={() => this.setState({terminal: 'c'})}>Terminal C</Button>
						</View>
						<View style={Style.row}>
							<ImageButton source={hudsonnews} />
							<ImageButton source={hudsonnewsdiscoveroc} />
							<ImageButton source={ocmarket} />
							<ImageButton source={ripcurl} />
						</View>
						<View style={Style.row}>
							<ImageButton source={sunglasshut} />
							<ImageButton source={cpk} />
							<ImageButton source={mcdonalds} />
							<ImageButton source={starbucks} />
						</View>
						<View style={Style.row}>
							<ImageButton source={farmersmarket} />
							<ImageButton source={rubys} />
							<ImageButton source={rubystogo} />
						</View>
						<CardSection>
						<Button onPress={() => Actions.gateArrival()}>
							Gate Arrival
						</Button>
					</CardSection>
				</View>
				);
			case 'b':
				return (
					<View style={Style.content}>
					<View style={Style.row}>
						<Button onPress={() => this.setState({terminal: 'a'})}>Terminal A</Button>
						<Button onPress={() => this.setState({terminal: 'b'})}>Terminal B</Button>
						<Button onPress={() => this.setState({terminal: 'c'})}>Terminal C</Button>
					</View>
						<View style={Style.row}>
							<ImageButton source={brookstone} />
							<ImageButton source={xpresspa} />
							<ImageButton source={southcoastnews} />
							<ImageButton source={beachfrontnews} />
							<ImageButton source={inmotion} />
						</View>
						<View style={Style.row}>
							<ImageButton source={vinovolo} />
							<ImageButton source={hobie} />
							<ImageButton source={mcdonalds} />
							<ImageButton source={starbucks} />
							<ImageButton source={javis} />
						</View>
						<View style={Style.row}>
							<ImageButton source={jerrysdogs} />
							<ImageButton source={pinkberry} />
							<ImageButton source={peiwei} />
							<ImageButton source={subway} />
							<ImageButton source={zovs} />
						</View>
						<CardSection>
							<Button onPress={() => Actions.gateArrival()}>
								Gate Arrival
							</Button>
						</CardSection>
					</View>

				);
			case 'c': 
				return (
					<View style={Style.content}>
						<View style={Style.row}>
							<Button onPress={() => this.setState({terminal: 'a'})}>Terminal A</Button>
							<Button onPress={() => this.setState({terminal: 'b'})}>Terminal B</Button>
							<Button onPress={() => this.setState({terminal: 'c'})}>Terminal C</Button>
						</View>
						<View style={Style.row}>
							<ImageButton source={cnn} />
							<ImageButton source={cnbc} />
							<ImageButton source={belgiumbeerbar} />
							<ImageButton source={carlsjr} />
						</View>
						<View style={Style.row}>
							<ImageButton source={starbucks} />
							<ImageButton source={ciao} />
							<ImageButton source={ducks} />
						</View>
						<CardSection>
							<Button onPress={() => Actions.gateArrival()}>
								Gate Arrival
							</Button>
						</CardSection>
					</View>

					);
			default: 
				return <Text>No terminal selected</Text>
		}
	}

	render() {
		return (
			<View style={Style.container}>
				{this.renderButtons()}
				<Footer />
			</View>
		);
	}


}

const mapStateToProps = ({ departure }) => {
  const { wheelchairNumber, flightNumber, airline, firstName, lastName } = departure;

  return { wheelchairNumber, flightNumber, airline, firstName, lastName };
};

export default connect(mapStateToProps, { })(SelectStopsSterile);