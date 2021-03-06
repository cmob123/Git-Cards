// written by Chris O'Brien, June 2017

const React = require("react");

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

module.exports = Card; // export to App and CardList