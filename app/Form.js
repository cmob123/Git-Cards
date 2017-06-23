const React = require("react");

require("./style.less");
const axios = require("axios");

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = { userName: "" };
		this.handleSubmit = (event) => {
			event.preventDefault(); // stop the form's onSubmit from reloading the page
			axios.get("https://api.github.com/users/" + this.state.userName) // send AJAX request for user data
				.then(resp => { // deal with fulfilled promise
					this.props.onSubmit(resp.data); // pass data to App
					this.setState({ userName: "" }); // reset field
				}, fail => { // deal with broken promise
					this.setState({ userName: "ERROR: name not found." }); // display error
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
		);
	}
}

module.exports = Form;