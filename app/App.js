const React = require("react");
const ReactDOM = require("react-dom");
const axios = require("axios");
const Card = require("./Card");
const CardList = require("./CardList");
const Form = require("./Form");

require("./style.less");

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: []
		};
		this.addNewCard = (cardInfo) => {
			this.setState(prevState => ({
				cards: prevState.cards.concat(cardInfo)
			}));
		}
	}
	render() {
		return (
			<div>
				<Form onSubmit={ (e) => this.addNewCard(e) }/>
				<CardList cards={this.state.cards} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));