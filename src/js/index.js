//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

const SecondsCounter = props => {
	return (
		<div className="websiteCounter">
			<div>
				<i className="far fa-clock"></i>
			</div>
			<div className="six">{props.sixth % 10}</div>
			<div className="five">{props.fifth % 10}</div>
			<div className="four">{props.fourth % 10}</div>
			<div className="three">{props.third % 10}</div>
			<div className="two">{props.second % 10}</div>
			<div className="one">{props.first % 10}</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	sixth: PropTypes.number,
	fifth: PropTypes.number,
	fourth: PropTypes.number,
	third: PropTypes.number,
	second: PropTypes.number,
	first: PropTypes.number
};

let counter = 0;
setInterval(() => {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	ReactDOM.render(
		<SecondsCounter
			first={one}
			second={two}
			third={three}
			fourth={four}
			fifth={five}
			sixth={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
