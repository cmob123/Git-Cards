const React = require("react");
const ReactDOM = require("react-dom");

require("./style.less");
const axios = require("axios");

const Card = (props) => {
	return (
		<div id="outer">
			<img src={props.avatar_url} />
			<div id="info">
				<div id="name">{props.name}</div>
				<div>{props.company}</div>
			</div>
		</div>
	);
};

const CardList = (props) => {
	return (
		<div>
			{props.cards.map(
				card => <Card key={card.id} {...card} />
			)}
		</div>
	);
};

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = { userName: "" };
		this.handleSubmit = (event) => {
			event.preventDefault(); // stop the form's onSubmit from reloading the page
			axios.get("https://api.github.com/users/" + this.state.userName) // send AJAX request for user data
				.then(resp => { // deal with fulfilled promise
					this.props.onSubmit(resp.data);
					this.setState({ userName: "" });
				}, fail => { // deal with broken promise (***!!!***)
					this.setState({ userName: "ERROR: name not found." });
				});
		};
	}

	render() {
		return (
			<form onSubmit={ (e) => this.handleSubmit(e) }>
				<input type="text"
				value={this.state.userName}
				onChange={(event) => this.setState({ userName: event.target.value })}
				placeholder="GitHub Username" required />
				<button type="submit">Add card</button>
			</form>
			// disallow empty submissions
		);
	}
}

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