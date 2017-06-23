// written by Chris O'Brien, June 2017

const React = require("react");
const ReactDOM = require("react-dom");
const Form = require("./Form");
const Card = require("./Card");
const CardList = require("./CardList");
require("./style.less");

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: []
		};
		this.addNewCard = (cardInfo) => { // adds card to list with data passed from Form
			this.setState(prevState => ({
				cards: prevState.cards.concat(cardInfo)
			}));
		};
	}

	render() { // put it all together
		return (
			<div>
				<Form onSubmit={ (e) => this.addNewCard(e) }/>
				<CardList cards={this.state.cards} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));