const React = require("react");
const Card = require("./Card");

const CardList = (props) => {
	return (
		<div>
			{props.cards.map(
				card => <Card key={card.id} {...card} />
			)}
		</div>
	);
};

module.exports = CardList;